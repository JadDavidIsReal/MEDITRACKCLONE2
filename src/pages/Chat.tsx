import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat/Chat';

const ChatPage: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-6 overflow-y-auto ml-64">
                <Chat />
            </main>
        </div>
    );
};

export default ChatPage;
