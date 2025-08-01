import React from 'react';
import { Bell, User, Menu } from 'lucide-react';

interface PatientLayoutProps {
    children: React.ReactNode;
}

const PatientLayout: React.FC<PatientLayoutProps> = ({ children }) => {
    const handleLogout = (): void => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userRole");
        localStorage.removeItem("userName");
        window.location.href = "/login";
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <header className="bg-gradient-to-b from-[#3D1528] to-[#A3386C] shadow-sm border-b border-gray-200 px-7 py-3 z-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="/src/assets/Logo.png" alt="UIC Logo" className="w-15 h-15 mr-2" />
                        <h1 className="text-white text-[28px] font-semibold">MEDITRACK</h1>
                    </div>
                    <div className="flex items-center">
                        <Bell className="w-6 h-6 text-white cursor-pointer mr-4" />
                        <button onClick={handleLogout} className="text-white">
                            Logout
                        </button>
                    </div>
                </div>
            </header>
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
    );
};

export default PatientLayout;
