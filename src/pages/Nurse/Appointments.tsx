import React, { useState } from 'react';
import NurseLayout from '../../components/Layout/NurseLayout';

const NurseAppointments: React.FC = () => {
    const [activeTab, setActiveTab] = useState('pending');

    const renderContent = () => {
        switch (activeTab) {
            case 'pending':
                return <div>Pending appointments content</div>;
            case 'confirmed':
                return <div>Confirmed appointments content</div>;
            case 'completed':
                return <div>Completed appointments content</div>;
            case 'today':
                return <div>Today's appointments content</div>;
            default:
                return null;
        }
    };

    return (
        <NurseLayout>
            <h1 className="text-3xl font-bold text-black mb-8">Appointments</h1>
            <div className="flex border-b">
                <button
                    className={`py-2 px-4 ${activeTab === 'pending' ? 'border-b-2 border-blue-500' : ''}`}
                    onClick={() => setActiveTab('pending')}
                >
                    Pending
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'confirmed' ? 'border-b-2 border-blue-500' : ''}`}
                    onClick={() => setActiveTab('confirmed')}
                >
                    Confirmed
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'completed' ? 'border-b-2 border-blue-500' : ''}`}
                    onClick={() => setActiveTab('completed')}
                >
                    Completed
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'today' ? 'border-b-2 border-blue-500' : ''}`}
                    onClick={() => setActiveTab('today')}
                >
                    Today
                </button>
            </div>
            <div className="p-4">
                {renderContent()}
            </div>
        </NurseLayout>
    );
};

export default NurseAppointments;
