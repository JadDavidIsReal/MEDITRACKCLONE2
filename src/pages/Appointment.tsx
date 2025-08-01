import React from 'react';
import PatientLayout from '../components/Layout/PatientLayout';
import AppointmentForm from '../components/Appointment/AppointmentForm';

const AppointmentPage: React.FC = () => {
    return (
        <PatientLayout>
            <AppointmentForm />
        </PatientLayout>
    );
};

export default AppointmentPage;
