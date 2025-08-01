import React from 'react';

const About: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-black mb-8">About MediTrack</h1>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <p>
                    MediTrack is a school clinic-based health services platform designed to be understood and maintained by student developers.
                </p>
            </div>
        </div>
    );
};

export default About;
