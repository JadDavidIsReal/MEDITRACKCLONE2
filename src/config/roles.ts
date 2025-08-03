export const ROLES = {
    NURSE: 'Nurse',
    DOCTOR: 'Doctor',
    PATIENT: 'Patient',
};

export const PERMISSIONS = {
    [ROLES.NURSE]: ['/dashboard', '/search/student', '/search/employee', '/search/community', '/about', '/nurse/appointments', '/patient/:patientType/:id', '/chat'],
    [ROLES.DOCTOR]: ['/dashboard', '/search/student', '/search/employee', '/search/community', '/about', '/chat', '/patient/:patientType/:id'],
    [ROLES.PATIENT]: ['/dashboard', '/about', '/appointment'],
};
