import React from 'react';
import Sidebar from '../../../components/Sidebar';
import History from '../../../components/History/History';

const HistoryPage: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-6 overflow-y-auto ml-64">
                <History />
            </main>
        </div>
    );
};

export default HistoryPage;
