import React from 'react';
import Sidebar from '../components/Sidebar';
import About from '../components/About/About';

const AboutPage: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-6 overflow-y-auto ml-64">
                <About />
            </main>
        </div>
    );
};

export default AboutPage;
