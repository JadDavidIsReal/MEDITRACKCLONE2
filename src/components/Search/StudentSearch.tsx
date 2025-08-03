import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { STUDENT_PATIENTS } from '../../mock/patients';
import { ROLES } from '../../config/roles';

interface StudentPatient {
    id: number;
    lastName: string;
    firstName: string;
    gender: 'M' | 'F';
    course: string;
    year: string;
    contactNumber: string;
    dateOfBirth: string;
    assignedDoctor: string;
}

const StudentSearch: React.FC = () => {
    const [patients, setPatients] = useState<StudentPatient[]>([]);
    const userRole = localStorage.getItem('userRole');

    useEffect(() => {
        if (userRole === ROLES.DOCTOR) {
            const doctorUsername = 'doctor'; // In a real app, this would come from logged in user data
            setPatients(STUDENT_PATIENTS.filter(p => p.assignedDoctor === doctorUsername));
        } else {
            setPatients(STUDENT_PATIENTS);
        }
    }, [userRole]);

    return (
        <div>
            <h1 className="text-3xl font-bold text-black mb-8">Student Patients</h1>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-normal text-black mb-4">Patient List</h2>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Last Name</th>
                            <th className="py-2 px-4 border-b">First Name</th>
                            <th className="py-2 px-4 border-b">Gender</th>
                            <th className="py-2 px-4 border-b">Course & Year</th>
                            <th className="py-2 px-4 border-b">Contact Number</th>
                            <th className="py-2 px-4 border-b">Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient.id} className="cursor-pointer hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">
                                    <Link to={`/patient/student/${patient.id}`}>{patient.lastName}</Link>
                                </td>
                                <td className="py-2 px-4 border-b">
                                    <Link to={`/patient/student/${patient.id}`}>{patient.firstName}</Link>
                                </td>
                                <td className="py-2 px-4 border-b">{patient.gender}</td>
                                <td className="py-2 px-4 border-b">{`${patient.course} ${patient.year}`}</td>
                                <td className="py-2 px-4 border-b">{patient.contactNumber}</td>
                                <td className="py-2 px-4 border-b">{patient.dateOfBirth}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentSearch;
