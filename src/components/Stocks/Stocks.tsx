import React, { useState } from 'react';

interface Stock {
    medicineName: string;
    type: string;
    dateReceived: string;
    expiry: string;
    quantity: number;
    campus: 'Fr. Selga Street' | 'Bonifacio' | 'Bajada';
}

const Stocks: React.FC = () => {
    const [stocks, setStocks] = useState<Stock[]>([]);
    const [newStock, setNewStock] = useState<Stock>({
        medicineName: '',
        type: '',
        dateReceived: '',
        expiry: '',
        quantity: 0,
        campus: 'Fr. Selga Street',
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [stockToDelete, setStockToDelete] = useState<Stock | null>(null);

    const handleAddStock = (e: React.FormEvent) => {
        e.preventDefault();
        setStocks([...stocks, newStock]);
        setNewStock({
            medicineName: '',
            type: '',
            dateReceived: '',
            expiry: '',
            quantity: 0,
            campus: 'Fr. Selga Street',
        });
    };

    const handleDeleteStock = () => {
        if (stockToDelete) {
            setStocks(stocks.filter((stock) => stock !== stockToDelete));
            setIsModalOpen(false);
            setStockToDelete(null);
        }
    };

    const openDeleteModal = (stock: Stock) => {
        setStockToDelete(stock);
        setIsModalOpen(true);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-black mb-8">Stocks</h1>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <h2 className="text-2xl font-normal text-black mb-4">Add New Stock</h2>
                <form onSubmit={handleAddStock}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Medicine Name"
                            className="w-full py-2 px-4 border border-gray-300 rounded-md"
                            value={newStock.medicineName}
                            onChange={(e) => setNewStock({ ...newStock, medicineName: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Type"
                            className="w-full py-2 px-4 border border-gray-300 rounded-md"
                            value={newStock.type}
                            onChange={(e) => setNewStock({ ...newStock, type: e.target.value })}
                        />
                        <input
                            type="date"
                            placeholder="Date Received"
                            className="w-full py-2 px-4 border border-gray-300 rounded-md"
                            value={newStock.dateReceived}
                            onChange={(e) => setNewStock({ ...newStock, dateReceived: e.target.value })}
                        />
                        <input
                            type="date"
                            placeholder="Expiry"
                            className="w-full py-2 px-4 border border-gray-300 rounded-md"
                            value={newStock.expiry}
                            onChange={(e) => setNewStock({ ...newStock, expiry: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Quantity"
                            className="w-full py-2 px-4 border border-gray-300 rounded-md"
                            value={newStock.quantity}
                            onChange={(e) => setNewStock({ ...newStock, quantity: parseInt(e.target.value) })}
                        />
                        <select
                            className="w-full py-2 px-4 border border-gray-300 rounded-md"
                            value={newStock.campus}
                            onChange={(e) => setNewStock({ ...newStock, campus: e.target.value as 'Fr. Selga Street' | 'Bonifacio' | 'Bajada' })}
                        >
                            <option value="Fr. Selga Street">Fr. Selga Street</option>
                            <option value="Bonifacio">Bonifacio</option>
                            <option value="Bajada">Bajada</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full py-3 text-white bg-gradient-to-r from-[#3D1528] to-[#A3386C] rounded-md hover:opacity-90"
                    >
                        Add Stock
                    </button>
                </form>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-normal text-black mb-4">Stock List</h2>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Medicine Name</th>
                            <th className="py-2 px-4 border-b">Type</th>
                            <th className="py-2 px-4 border-b">Date Received</th>
                            <th className="py-2 px-4 border-b">Expiry</th>
                            <th className="py-2 px-4 border-b">Quantity</th>
                            <th className="py-2 px-4 border-b">Campus</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stocks.map((stock, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b">{stock.medicineName}</td>
                                <td className="py-2 px-4 border-b">{stock.type}</td>
                                <td className="py-2 px-4 border-b">{stock.dateReceived}</td>
                                <td className="py-2 px-4 border-b">{stock.expiry}</td>
                                <td className="py-2 px-4 border-b">{stock.quantity}</td>
                                <td className="py-2 px-4 border-b">{stock.campus}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        onClick={() => openDeleteModal(stock)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
                        <p>Are you sure you want to delete this stock item?</p>
                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="mr-4 px-4 py-2 bg-gray-300 rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteStock}
                                className="px-4 py-2 bg-red-500 text-white rounded-md"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stocks;
