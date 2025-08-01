import React from 'react';
import Sidebar from '../../components/Sidebar';
import Stocks from '../../components/Stocks/Stocks';

const StocksPage: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-6 overflow-y-auto ml-64">
                <Stocks />
            </main>
        </div>
    );
};

export default StocksPage;