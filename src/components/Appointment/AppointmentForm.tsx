import React, { useState } from 'react';

const AppointmentForm: React.FC = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock booking logic
        alert(`Appointment booked for ${date} at ${time} for: ${reason}`);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-black mb-8">Book an Appointment</h1>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="date"
                            className="w-full py-2 px-4 border border-gray-300 rounded-md"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <input
                            type="time"
                            className="w-full py-2 px-4 border border-gray-300 rounded-md"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                        <textarea
                            placeholder="Reason for appointment"
                            className="w-full py-2 px-4 border border-gray-300 rounded-md col-span-2"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 w-full py-3 text-white bg-gradient-to-r from-[#3D1528] to-[#A3386C] rounded-md hover:opacity-90"
                    >
                        Book Appointment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;
