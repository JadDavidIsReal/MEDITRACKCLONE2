export const ROLES = {
    NURSE: 'Nurse',
    DOCTOR: 'Doctor',
    PATIENT: 'Patient',
};

export const PERMISSIONS = {
    [ROLES.NURSE]: ['/dashboard', '/search/student', '/search/employee', '/search/community', '/inventory/dashboard', '/inventory/stocks', '/inventory/history', '/reports', '/print', '/about', '/nurse/appointments'],
    [ROLES.DOCTOR]: ['/dashboard', '/search/student', '/search/employee', '/search/community', '/about', '/chat'],
    [ROLES.PATIENT]: ['/dashboard', '/about', '/appointment'],
};
