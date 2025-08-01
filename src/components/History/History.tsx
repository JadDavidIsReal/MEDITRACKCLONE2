import React, { useState } from 'react';

interface HistoryItem {
    dateRemoved: string;
    medicineName: string;
    quantity: number;
}

const History: React.FC = () => {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    return (
        <div>
            <h1 className="text-3xl font-bold text-black mb-8">Stock History</h1>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-normal text-black mb-4">History List</h2>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Date Removed</th>
                            <th className="py-2 px-4 border-b">Medicine Name</th>
                            <th className="py-2 px-4 border-b">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b">{item.dateRemoved}</td>
                                <td className="py-2 px-4 border-b">{item.medicineName}</td>
                                <td className="py-2 px-4 border-b">{item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;
