export const APPOINTMENTS = [
    {
        id: 1,
        patientName: 'John Doe',
        date: '2023-11-10',
        time: '10:00 AM',
        reason: 'Fever',
        status: 'pending',
    },
    {
        id: 2,
        patientName: 'Jane Smith',
        date: '2023-11-10',
        time: '11:00 AM',
        reason: 'Cough',
        status: 'confirmed',
    },
    {
        id: 3,
        patientName: 'Peter Williams',
        date: '2023-10-25',
        time: '02:00 PM',
        reason: 'Headache',
        status: 'completed',
    },
    {
        id: 4,
        patientName: 'Mary Brown',
        date: new Date().toISOString().split('T')[0], // Today's date
        time: '09:00 AM',
        reason: 'Follow-up',
        status: 'confirmed',
    },
];
