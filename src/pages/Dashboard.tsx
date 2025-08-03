import React, { useState, useEffect } from 'react';
import NurseDashboard from '../components/Dashboard/NurseDashboard';
import DoctorDashboard from '../components/Dashboard/DoctorDashboard';
import PatientDashboard from '../components/Dashboard/PatientDashboard';
import NurseLayout from '../components/Layout/NurseLayout';
import PatientLayout from '../components/Layout/PatientLayout';
import { ROLES } from '../config/roles';

const Dashboard: React.FC = () => {
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        const role = localStorage.getItem('userRole');
        setUserRole(role);
    }, []);

    const renderDashboard = () => {
        switch (userRole) {
            case ROLES.NURSE:
                return (
                    <NurseLayout>
                        <NurseDashboard />
                    </NurseLayout>
                );
            case ROLES.DOCTOR:
                return (
                    <NurseLayout>
                        <DoctorDashboard />
                    </NurseLayout>
                );
            case ROLES.PATIENT:
                return (
                    <PatientLayout>
                        <PatientDashboard />
                    </PatientLayout>
                );
            default:
                return null;
        }
    };

    return <>{renderDashboard()}</>;
};

export default Dashboard;
