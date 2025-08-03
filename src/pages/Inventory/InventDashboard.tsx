import React from 'react';
import { AlertTriangle } from 'lucide-react';
import NurseLayout from '../../components/Layout/NurseLayout';

const InventDashboard: React.FC = () => {
    // Get current date and time
    const getCurrentDateTime = () => {
        const now = new Date();
        const date = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const time = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        return { date, time };
    };

    const { date, time } = getCurrentDateTime();

    return (
        <NurseLayout>
            <div className="bg-white main-dashboard p-6 overflow-y-auto">
                {/* Date and Time */}
                <div className="flex justify-center mb-4">
                    <div className="flex flex-col items-center">
                        <p className="text-[22px] font-normal text-black">{date}</p>
                        <p className="text-[17px] text-base text-gray-500 mt-1">{time}</p>
                        <div className="w-[130px] h-0.5 mt-3 bg-[#A3386C]"></div>
                    </div>
                </div>

                {/* Dashboard Title */}
                <div className="mb-6">
                    <h2 className="font-normal text-black text-[32px]">Dashboard</h2>
                </div>

                <div className="w-full h-px bg-[#A3386C] mb-6"></div>

                {/* Dashboard Cards Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Soon-to-Expire Medications Card */}
                        <div className="border border-[#A3386C] py-4">
                            <h3 className="font-normal text-black text-lg mb-4 text-center">Soon-to-Expire Medications</h3>
                            <div className="w-full h-px bg-[#A3386C] mb-4"></div>
                            <div className="flex">
                                <div className="flex-1 border-r border-[#A3386C] py-2">
                                    <p className="font-medium text-black text-sm text-center">DECOLGEN Forte 25mg / 2mg / 500mg</p>
                                </div>
                                <div className="flex-1 py-2">
                                    <p className="font-medium text-black text-sm text-center">2025-05-11</p>
                                </div>
                            </div>
                        </div>

                        {/* Out of Stock Card */}
                        <div className="border border-[#A3386C] bg-white px-6 py-4">
                            <div className="flex items-center">
                                <span className="font-bold text-black text-2xl">0</span>
                                <AlertTriangle className="w-[21px] h-[22px] ml-12 text-amber-500" />
                            </div>
                            <p className="mt-2 font-normal text-black text-base">Out of Stock</p>
                        </div>
                    </div>

                    {/* Right Column - Inventory Stock Level Card */}
                    <div className="flex flex-col justify-center border border-[#a3386c] p-6">
                        <h3 className="font-normal text-black text-2xl mb-4">Inventory Stock Level</h3>
                        <p className="font-light text-black text-base mb-6">Stock Status</p>
                        <div className="w-full">
                            <table className="w-full table-fixed border border-[#a3386c]">
                                <thead>
                                    <tr>
                                        <th className="w-1/2 text-xs font-semibold text-center border border-[#A3386C] py-3">
                                            Current Stock Count
                                        </th>
                                        <th className="w-1/2 text-xs font-normal text-[#008000] text-center border border-[#A3386C] py-3">
                                            HIGH
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Example row, replace with dynamic data if available */}
                                    <tr>
                                        <td className="text-sm font-normal text-black text-center border border-[#a3386c] p-2">500</td>
                                        <td className="text-sm font-medium text-black text-center border border-[#a3386c] p-2">200</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-[#A3386C] mb-6"></div>

                {/* Overview Title */}
                <div className="mb-6">
                    <h2 className="font-normal text-black text-[32px]">Overview</h2>
                </div>

                {/* Overview Cards Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Stock Received Card */}
                    <div className="border border-[#a3386c] bg-white p-6">
                        <h3 className="font-normal text-black text-base mb-2">Recent Stock Received</h3>
                        <p className="font-light text-black text-sm mb-6">Medicine Information</p>
                        <div className="w-full">
                            <table className="w-full border border-[#a3386c]">
                                <thead>
                                    <tr>
                                        <th className="text-xs font-extrabold text-black text-center border border-[#a3386c] p-2">MEDICINE NAME</th>
                                        <th className="text-xs font-extrabold text-black text-center border border-[#a3386c] p-2">DATE RECEIVED</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-sm font-normal text-black text-center border border-[#a3386c] p-2">RITEMED Paracetamol 500mg</td>
                                        <td className="text-sm font-medium text-black text-center border border-[#a3386c] p-2">2027-03-25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Common Seasonal Illnesses Card */}
                    <div className="border border-[#a3386c] bg-white p-6">
                        <h3 className="font-normal text-black text-base mb-4">Common Seasonal Illnesses</h3>
                        <div className="w-full h-px bg-gray-300 mb-4"></div>

                        <div className="space-y-0">
                            <div className="border-b border-[#a3386c]">
                                <div className="py-2 px-3 flex items-center justify-between cursor-pointer">
                                    <span className="font-normal text-black text-base">Fever</span>
                                    <img className="w-[18px] h-[18px]" alt="Arrow" src="/src/assets/up-arrow.png" />
                                </div>
                            </div>
                            <div className="border-b border-[#a3386c]">
                                <div className="py-2 px-3 flex items-center justify-between cursor-pointer">
                                    <span className="font-normal text-black text-base">Cold & Flu</span>
                                    <img className="w-[18px] h-[18px]" alt="Arrow" src="/src/assets/up-arrow.png" />
                                </div>
                            </div>
                            <div className="border-b border-[#a3386c]">
                                <div className="py-2 px-3 flex items-center justify-between cursor-pointer">
                                    <span className="font-normal text-black text-base">Allergies</span>
                                    <img className="w-[18px] h-[18px]" alt="Arrow" src="/src/assets/down-arrow.png" />
                                </div>
                            </div>
                        </div>

                        <p className="mt-6 font-normal italic text-[#ff0000] text-[13px]">Check stocks regularly during peak seasons.</p>
                    </div>
                </div>
            </div>
        </NurseLayout>
    );
};

export default InventDashboard;
