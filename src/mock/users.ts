import { ROLES } from '../config/roles';

export const USERS = [
    {
        username: 'nurse',
        password: 'password',
        role: ROLES.NURSE,
        name: 'Florence Nightingale',
    },
    {
        username: 'doctor',
        password: 'password',
        role: ROLES.DOCTOR,
        name: 'Dr. John Watson',
    },
    {
        username: 'patient',
        password: 'password',
        role: ROLES.PATIENT,
        name: 'John Smith',
    },
];
