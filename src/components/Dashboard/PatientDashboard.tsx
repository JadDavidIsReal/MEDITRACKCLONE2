import React from 'react';
import { useNavigate } from 'react-router-dom';

const PatientDashboard: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="text-3xl font-bold text-black mb-8">My Profile</h1>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                <h2 className="text-2xl font-normal text-black mb-4">My Notes</h2>
                <div className="bg-gray-200 h-64 rounded-md p-4">
                    <h3 className="font-bold">Nurse's Notes</h3>
                    <p>Read-only notes from the nurse.</p>
                    <h3 className="font-bold mt-4">Doctor's Notes</h3>
                    <p>Read-only notes from the doctor.</p>
                </div>
            </div>
            <button
                onClick={() => navigate('/appointment')}
                className="w-full py-3 text-white bg-gradient-to-r from-[#3D1528] to-[#A3386C] rounded-md hover:opacity-90"
            >
                Book an Appointment
            </button>
        </div>
    );
};

export default PatientDashboard;
