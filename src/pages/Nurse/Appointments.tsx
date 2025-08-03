import React, { useState } from 'react';
import NurseLayout from '../../components/Layout/NurseLayout';
import { APPOINTMENTS } from '../../mock/appointments';

const NurseAppointments: React.FC = () => {
    const [activeTab, setActiveTab] = useState('pending');

    const renderContent = () => {
        const today = new Date().toISOString().split('T')[0];
        let appointments;

        switch (activeTab) {
            case 'pending':
                appointments = APPOINTMENTS.filter(a => a.status === 'pending');
                break;
            case 'confirmed':
                appointments = APPOINTMENTS.filter(a => a.status === 'confirmed');
                break;
            case 'completed':
                appointments = APPOINTMENTS.filter(a => a.status === 'completed');
                break;
            case 'today':
                appointments = APPOINTMENTS.filter(a => a.date === today);
                break;
            default:
                appointments = [];
        }

        return (
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Patient</th>
                        <th className="py-2 px-4 border-b">Date</th>
                        <th className="py-2 px-4 border-b">Time</th>
                        <th className="py-2 px-4 border-b">Reason</th>
                        <th className="py-2 px-4 border-b">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => (
                        <tr key={appointment.id}>
                            <td className="py-2 px-4 border-b">{appointment.patientName}</td>
                            <td className="py-2 px-4 border-b">{appointment.date}</td>
                            <td className="py-2 px-4 border-b">{appointment.time}</td>
                            <td className="py-2 px-4 border-b">{appointment.reason}</td>
                            <td className="py-2 px-4 border-b">{appointment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
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
