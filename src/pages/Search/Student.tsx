import React from 'react';
import NurseLayout from '../../components/Layout/NurseLayout';
import StudentSearch from '../../components/Search/StudentSearch';

const Student: React.FC = () => {
    return (
        <NurseLayout>
            <StudentSearch />
        </NurseLayout>
    );
};

export default Student;