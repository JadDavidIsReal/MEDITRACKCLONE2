import React from 'react';
import NurseLayout from '../../components/Layout/NurseLayout';
import EmployeeSearch from '../../components/Search/EmployeeSearch';

const Employee: React.FC = () => {
    return (
        <NurseLayout>
            <EmployeeSearch />
        </NurseLayout>
    );
};

export default Employee;