import React from 'react';

const Reports: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-black mb-8">Reports</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-normal text-black mb-4">Top-Used Medicines</h2>
                    <div className="bg-gray-200 h-64 rounded-md"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-2xl font-normal text-black mb-4">Monthly Usage Trends</h2>
                    <div className="bg-gray-200 h-64 rounded-md"></div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 col-span-2">
                    <h2 className="text-2xl font-normal text-black mb-4">Low Stock Alerts</h2>
                    <div className="bg-gray-200 h-64 rounded-md"></div>
                </div>
            </div>
        </div>
    );
};

export default Reports;
