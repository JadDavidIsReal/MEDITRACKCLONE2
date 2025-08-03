import React, { useState, useEffect } from 'react';
import { ROLES } from '../../config/roles';

interface Message {
    sender: string;
    text: string;
}

interface Conversation {
    id: number;
    with: string;
    messages: Message[];
    withRole: string;
}

const allConversations: Conversation[] = [
    {
        id: 1,
        with: 'Dr. Jad David M.D.',
        withRole: ROLES.DOCTOR,
        messages: [
            { sender: 'me', text: 'Hi Dr. David, how are you?' },
            { sender: 'Dr. Jad David M.D.', text: 'I am good, thanks for asking.' },
        ],
    },
    {
        id: 2,
        with: 'Maam UIC Nurse',
        withRole: ROLES.NURSE,
        messages: [
            { sender: 'me', text: 'Hi Nurse, do you have the test results?' },
            { sender: 'Maam UIC Nurse', text: 'Yes, I do. I will send them to you shortly.' },
        ],
    },
];

const Chat: React.FC = () => {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
    const userRole = localStorage.getItem('userRole');

    useEffect(() => {
        if (userRole === ROLES.NURSE) {
            setConversations(allConversations.filter(c => c.withRole === ROLES.DOCTOR));
        } else if (userRole === ROLES.DOCTOR) {
            setConversations(allConversations.filter(c => c.withRole === ROLES.DOCTOR || c.withRole === ROLES.NURSE));
        }
    }, [userRole]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedConversation) {
            const updatedConversation = {
                ...selectedConversation,
                messages: [...selectedConversation.messages, { sender: 'me', text: newMessage }],
            };
            const updatedConversations = conversations.map((c) =>
                c.id === selectedConversation.id ? updatedConversation : c
            );
            setConversations(updatedConversations);
            setSelectedConversation(updatedConversation);
            setNewMessage('');
        }
    };

    return (
        <div className="flex h-full">
            <div className="w-1/3 border-r border-gray-200">
                <h2 className="text-2xl font-bold p-4">Inbox</h2>
                <ul>
                    {conversations.map((c) => (
                        <li
                            key={c.id}
                            className={`p-4 cursor-pointer ${
                                selectedConversation?.id === c.id ? 'bg-gray-200' : ''
                            }`}
                            onClick={() => setSelectedConversation(c)}
                        >
                            {c.with}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-2/3 flex flex-col">
                {selectedConversation ? (
                    <>
                        <div className="p-4 border-b border-gray-200">
                            <h2 className="text-2xl font-bold">{selectedConversation.with}</h2>
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto">
                            {selectedConversation.messages.map((m, i) => (
                                <div
                                    key={i}
                                    className={`p-2 my-2 rounded-md ${
                                        m.sender === 'me' ? 'bg-blue-200 ml-auto' : 'bg-gray-200'
                                    }`}
                                >
                                    {m.text}
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 p-2 border border-gray-300 rounded-md"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500">Select a conversation to start chatting.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chat;
