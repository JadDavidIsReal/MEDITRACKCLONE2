import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COMMUNITY_PATIENTS } from '../../mock/patients';
import { ROLES } from '../../config/roles';

interface CommunityPatient {
    id: number;
    lastName: string;
    firstName: string;
    gender: 'M' | 'F';
    address: string;
    contactNumber: string;
    dateOfBirth: string;
    civilStatus: string;
    assignedDoctor: string;
}

const CommunitySearch: React.FC = () => {
    const [patients, setPatients] = useState<CommunityPatient[]>([]);
    const [newPatient, setNewPatient] = useState({
        lastName: '',
        firstName: '',
        gender: 'M',
        address: '',
        contactNumber: '',
        dateOfBirth: '',
        civilStatus: '',
    });
    const userRole = localStorage.getItem('userRole');

    useEffect(() => {
        if (userRole === ROLES.DOCTOR) {
            const doctorUsername = 'doctor'; // In a real app, this would come from logged in user data
            setPatients(COMMUNITY_PATIENTS.filter(p => p.assignedDoctor === doctorUsername));
        } else {
            setPatients(COMMUNITY_PATIENTS);
        }
    }, [userRole]);

    const handleAddPatient = (e: React.FormEvent) => {
        e.preventDefault();
        // This is a mock implementation. In a real app, you would send this to a server.
        const newPatientData = { ...newPatient, id: patients.length + 1, assignedDoctor: '' };
        setPatients([...patients, newPatientData]);
        setNewPatient({
            lastName: '',
            firstName: '',
            gender: 'M',
            address: '',
            contactNumber: '',
            dateOfBirth: '',
            civilStatus: '',
        });
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-black mb-8">Community Patients</h1>

            {userRole === ROLES.NURSE && (
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
                    <h2 className="text-2xl font-normal text-black mb-4">Add New Patient</h2>
                    <form onSubmit={handleAddPatient}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="w-full py-2 px-4 border border-gray-300 rounded-md"
                                value={newPatient.lastName}
                                onChange={(e) => setNewPatient({ ...newPatient, lastName: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full py-2 px-4 border border-gray-300 rounded-md"
                                value={newPatient.firstName}
                                onChange={(e) => setNewPatient({ ...newPatient, firstName: e.target.value })}
                            />
                            <select
                                className="w-full py-2 px-4 border border-gray-300 rounded-md"
                                value={newPatient.gender}
                                onChange={(e) => setNewPatient({ ...newPatient, gender: e.target.value as 'M' | 'F' })}
                            >
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Address"
                                className="w-full py-2 px-4 border border-gray-300 rounded-md"
                                value={newPatient.address}
                                onChange={(e) => setNewPatient({ ...newPatient, address: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Contact Number"
                                className="w-full py-2 px-4 border border-gray-300 rounded-md"
                                value={newPatient.contactNumber}
                                onChange={(e) => setNewPatient({ ...newPatient, contactNumber: e.target.value })}
                            />
                            <input
                                type="date"
                                placeholder="Date of Birth"
                                className="w-full py-2 px-4 border border-gray-300 rounded-md"
                                value={newPatient.dateOfBirth}
                                onChange={(e) => setNewPatient({ ...newPatient, dateOfBirth: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Civil Status"
                                className="w-full py-2 px-4 border border-gray-300 rounded-md"
                                value={newPatient.civilStatus}
                                onChange={(e) => setNewPatient({ ...newPatient, civilStatus: e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 w-full py-3 text-white bg-gradient-to-r from-[#3D1528] to-[#A3386C] rounded-md hover:opacity-90"
                        >
                            Create
                        </button>
                    </form>
                </div>
            )}

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-normal text-black mb-4">Patient List</h2>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Last Name</th>
                            <th className="py-2 px-4 border-b">First Name</th>
                            <th className="py-2 px-4 border-b">Gender</th>
                            <th className="py-2 px-4 border-b">Address</th>
                            <th className="py-2 px-4 border-b">Contact Number</th>
                            <th className="py-2 px-4 border-b">Date of Birth</th>
                            <th className="py-2 px-4 border-b">Civil Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient.id} className="cursor-pointer hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">
                                    <Link to={`/patient/community/${patient.id}`}>{patient.lastName}</Link>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <Link to={`/patient/community/${patient.id}`}>{patient.firstName}</Link>
                                </td>
                                <td className="py-2 px-4 border-b">{patient.gender}</td>
                                <td className="py-2 px-4 border-b">{patient.address}</td>
                                <td className="py-2 px-4 border-b">{patient.contactNumber}</td>
                                <td className="py-2 px-4 border-b">{patient.dateOfBirth}</td>
                                <td className="py-2 px-4 border-b">{patient.civilStatus}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CommunitySearch;
