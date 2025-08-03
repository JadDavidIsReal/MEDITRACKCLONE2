import React from 'react';

const DoctorDashboard: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-black mb-8">Doctor Dashboard</h1>

            <section className="mb-10">
                <h2 className="text-2xl font-normal text-black mb-4">Consultations:</h2>
                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-center">
                        <p className="text-4xl font-bold text-[#A3386C] mr-4">0</p>
                        <p className="text-xl text-gray-700">Consultations</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex items-center">
                        <p className="text-4xl font-bold text-[#A3386C] mr-4">0</p>
                        <p className="text-xl text-gray-700">Referred Consultation</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-normal text-black mb-4">Recent Consultations:</h2>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 h-40 flex items-center justify-center text-gray-500 italic">
                    {/* This area can be populated with actual recent consultations data */}
                    No recent consultations to display.
                </div>
            </section>
        </div>
    );
};

export default DoctorDashboard;
