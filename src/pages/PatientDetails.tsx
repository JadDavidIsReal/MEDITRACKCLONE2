import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NurseLayout from '../components/Layout/NurseLayout';
import { ROLES } from '../config/roles';
import { COMMUNITY_PATIENTS, STUDENT_PATIENTS, EMPLOYEE_PATIENTS } from '../mock/patients';

interface Note {
    id: number;
    author: string;
    text: string;
    date: string;
}

interface Patient {
    id: number;
    lastName: string;
    firstName: string;
    gender: 'M' | 'F';
    address?: string;
    contactNumber: string;
    dateOfBirth: string;
    civilStatus?: string;
    assignedDoctor: string;
    course?: string;
    year?: string;
    department?: string;
    position?: string;
}

const PatientDetails: React.FC = () => {
    const { patientType, id } = useParams<{ patientType: string; id: string }>();
    const [patient, setPatient] = useState<Patient | null>(null);
    const [doctorsNotes, setDoctorsNotes] = useState<Note[]>([]);
    const [nursesNotes, setNursesNotes] = useState<Note[]>([]);
    const [newDoctorNote, setNewDoctorNote] = useState('');
    const [newNurseNote, setNewNurseNote] = useState('');
    const userRole = localStorage.getItem('userRole');
    const userName = localStorage.getItem('userName');

    useEffect(() => {
        let patientData;
        if (patientType === 'community') {
            patientData = COMMUNITY_PATIENTS.find(p => p.id === Number(id));
        } else if (patientType === 'student') {
            patientData = STUDENT_PATIENTS.find(p => p.id === Number(id));
        } else if (patientType === 'employee') {
            patientData = EMPLOYEE_PATIENTS.find(p => p.id === Number(id));
        }
        setPatient(patientData);

        // Mock notes data
        setDoctorsNotes([
            { id: 1, author: 'Dr. Jad David M.D.', text: 'Patient is recovering well.', date: '2023-10-26' },
        ]);
        setNursesNotes([
            { id: 1, author: 'Maam UIC Nurse', text: 'Patient was given medication.', date: '2023-10-26' },
        ]);
    }, [id, patientType]);

    const handleAddDoctorNote = () => {
        if (newDoctorNote.trim() && userName) {
            setDoctorsNotes([...doctorsNotes, { id: Date.now(), author: userName, text: newDoctorNote, date: new Date().toLocaleDateString() }]);
            setNewDoctorNote('');
        }
    };

    const handleAddNurseNote = () => {
        if (newNurseNote.trim() && userName) {
            setNursesNotes([...nursesNotes, { id: Date.now(), author: userName, text: newNurseNote, date: new Date().toLocaleDateString() }]);
            setNewNurseNote('');
        }
    };

    if (!patient) {
        return <div>Patient not found</div>;
    }

    return (
        <NurseLayout>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h1 className="text-3xl font-bold text-black mb-4">{`${patient.firstName} ${patient.lastName}`}</h1>
                <p><strong>Gender:</strong> {patient.gender}</p>
                <p><strong>Date of Birth:</strong> {patient.dateOfBirth}</p>
                <p><strong>Contact Number:</strong> {patient.contactNumber}</p>
                {patient.address && <p><strong>Address:</strong> {patient.address}</p>}
                {patient.course && <p><strong>Course & Year:</strong> {`${patient.course} ${patient.year}`}</p>}
                {patient.department && <p><strong>Department:</strong> {patient.department}</p>}
                {patient.position && <p><strong>Position:</strong> {patient.position}</p>}
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold text-black mb-4">Doctor's Notes</h2>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    {doctorsNotes.map(note => (
                        <div key={note.id} className="mb-4">
                            <p><strong>{note.author}</strong> ({note.date}):</p>
                            <p>{note.text}</p>
                        </div>
                    ))}
                    {userRole === ROLES.DOCTOR && (
                        <div className="mt-4">
                            <textarea
                                className="w-full p-2 border rounded"
                                value={newDoctorNote}
                                onChange={(e) => setNewDoctorNote(e.target.value)}
                                placeholder="Add a new note..."
                            />
                            <button onClick={handleAddDoctorNote} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add Note</button>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold text-black mb-4">Nurse's Notes</h2>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    {nursesNotes.map(note => (
                        <div key={note.id} className="mb-4">
                            <p><strong>{note.author}</strong> ({note.date}):</p>
                            <p>{note.text}</p>
                        </div>
                    ))}
                    {userRole === ROLES.NURSE && (
                        <div className="mt-4">
                            <textarea
                                className="w-full p-2 border rounded"
                                value={newNurseNote}
                                onChange={(e) => setNewNurseNote(e.target.value)}
                                placeholder="Add a new note..."
                            />
                            <button onClick={handleAddNurseNote} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add Note</button>
                        </div>
                    )}
                </div>
            </div>
        </NurseLayout>
    );
};

export default PatientDetails;
