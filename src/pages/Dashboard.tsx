import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Bell,
    User,
    LayoutDashboard,
    Archive,
    FileText,
    History,
    ShieldQuestion,
    Search,
    Printer,
    GraduationCap, // Added for Search submenu
    Briefcase,    // Added for Search submenu
    Users,        // Added for Search submenu
    ChevronDown,
    Menu
} from 'lucide-react';
import { PERMISSIONS } from '../config/roles';
import NurseDashboard from '../components/Dashboard/NurseDashboard';
import DoctorDashboard from '../components/Dashboard/DoctorDashboard';
import PatientDashboard from '../components/Dashboard/PatientDashboard';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isInventoryOpen, setInventoryOpen] = useState(false);
    const [userRole, setUserRole] = useState<string | null>(null);
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const role = localStorage.getItem('userRole');
        const name = localStorage.getItem('userName');
        setUserRole(role);
        setUserName(name);
    }, []);

    const handleNavigation = (path: string): void => {
        navigate(path);
    };

    const handleLogout = (): void => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userRole");
        localStorage.removeItem("userName");
        navigate("/login");
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <div className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-[#3D1528] to-[#A3386C] text-white z-20 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
                    {/* Profile & Navigation */}
                    <div className="p-6 mt-4 border-b border-white/50">
                        <div className="flex flex-col items-center mb-2">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-[#A3386C]" />
                            </div>
                            <div className={`flex flex-col items-center transition-opacity duration-200 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
                                <p className="text-[20px] font-semibold">{userName}</p>
                                <p className="text-sm">{userRole}</p>
                            </div>
                        </div>
                        <p className={`text-center text-xs transition-opacity duration-200 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Fr Selga, Davao City</p>
                    </div>

                    <nav className="mt-8">
                        <div className="px-4 space-y-2">
                            {userRole && PERMISSIONS[userRole]?.includes('/dashboard') && (
                                <div className="flex items-center px-4 py-3 bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/dashboard')}>
                                    <LayoutDashboard className="w-5 h-5 text-white flex-shrink-0" />
                                    {isSidebarOpen && <p className="text-sm font-medium text-white ml-3 whitespace-nowrap">Dashboard</p>}
                                </div>
                            )}

                            {userRole && (PERMISSIONS[userRole]?.includes('/search/student') || PERMISSIONS[userRole]?.includes('/search/employee') || PERMISSIONS[userRole]?.includes('/search/community')) && (
                                <div>
                                    <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => setSearchOpen(!isSearchOpen)}>
                                        <Search className="w-5 h-5 text-white flex-shrink-0" />
                                        {isSidebarOpen && (
                                            <div className="flex justify-between w-full items-center">
                                                <p className="text-sm text-white ml-3 whitespace-nowrap">Search</p>
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSearchOpen ? 'rotate-180' : ''}`} />
                                            </div>
                                        )}
                                    </div>
                                    {isSidebarOpen && isSearchOpen && (
                                        <div className="mt-1 space-y-1 pl-8">
                                            {PERMISSIONS[userRole]?.includes('/search/student') && (
                                                <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/search/student')}>
                                                    <GraduationCap className="w-5 h-5 text-white flex-shrink-0" />
                                                    <p className="text-sm text-white ml-3 whitespace-nowrap">Student</p>
                                                </div>
                                            )}
                                            {PERMISSIONS[userRole]?.includes('/search/employee') && (
                                                <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/search/employee')}>
                                                    <Briefcase className="w-5 h-5 text-white flex-shrink-0" />
                                                    <p className="text-sm text-white ml-3 whitespace-nowrap">Employee</p>
                                                </div>
                                            )}
                                            {PERMISSIONS[userRole]?.includes('/search/community') && (
                                                <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/search/community')}>
                                                    <Users className="w-5 h-5 text-white flex-shrink-0" />
                                                    <p className="text-sm text-white ml-3 whitespace-nowrap">Community</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                            {userRole && (PERMISSIONS[userRole]?.includes('/inventory/dashboard') || PERMISSIONS[userRole]?.includes('/inventory/stocks') || PERMISSIONS[userRole]?.includes('/inventory/history')) && (
                                <div>
                                    <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => setInventoryOpen(!isInventoryOpen)}>
                                        <Archive className="w-5 h-5 text-white flex-shrink-0" />
                                        {isSidebarOpen && (
                                            <div className="flex justify-between w-full items-center">
                                                <p className="text-sm text-white ml-3 whitespace-nowrap">Inventory</p>
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isInventoryOpen ? 'rotate-180' : ''}`} />
                                            </div>
                                        )}
                                    </div>
                                    {isSidebarOpen && isInventoryOpen && (
                                        <div className="mt-1 space-y-1 pl-8">
                                            {PERMISSIONS[userRole]?.includes('/inventory/dashboard') && (
                                                <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/inventory/dashboard')}>
                                                    <LayoutDashboard className="w-5 h-5 text-white flex-shrink-0" />
                                                    <p className="text-sm text-white ml-3 whitespace-nowrap">Dashboard</p>
                                                </div>
                                            )}
                                            {PERMISSIONS[userRole]?.includes('/inventory/stocks') && (
                                                <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/inventory/stocks')}>
                                                    <Archive className="w-5 h-5 text-white flex-shrink-0" />
                                                    <p className="text-sm text-white ml-3 whitespace-nowrap">Stocks</p>
                                                </div>
                                            )}
                                            {PERMISSIONS[userRole]?.includes('/inventory/history') && (
                                                <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/inventory/history')}>
                                                    <History className="w-5 h-5 text-white flex-shrink-0" />
                                                    <p className="text-sm text-white ml-3 whitespace-nowrap">History</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                            {userRole && PERMISSIONS[userRole]?.includes('/reports') && (
                                <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/reports')}>
                                    <FileText className="w-5 h-5 text-white flex-shrink-0" />
                                    {isSidebarOpen && <p className="text-sm text-white ml-3 whitespace-nowrap">Reports</p>}
                                </div>
                            )}

                            {userRole && PERMISSIONS[userRole]?.includes('/print') && (
                                <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/print')}>
                                    <Printer className="w-5 h-5 text-white flex-shrink-0" />
                                    {isSidebarOpen && <p className="text-sm text-white ml-3 whitespace-nowrap">Print</p>}
                                </div>
                            )}

                            {userRole && PERMISSIONS[userRole]?.includes('/about') && (
                                <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/about')}>
                                    <ShieldQuestion className="w-5 h-5 text-white flex-shrink-0" />
                                    {isSidebarOpen && <p className="text-sm text-white ml-3 whitespace-nowrap">About</p>}
                                </div>
                            )}
                        </div>
                    </nav>

                    <div className="absolute bottom-6 left-0 right-0 px-4">
                        <div className={`flex items-center p-3 hover:bg-[#77536A] rounded-lg cursor-pointer ${!isSidebarOpen && 'justify-center'}`} onClick={handleLogout}>
                            <div className="w-5 h-5 flex-shrink-0">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"/><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"/></svg>
                            </div>
                            {isSidebarOpen && <p className="text-sm ml-3 whitespace-nowrap">Logout</p>}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                    {/* Header */}
                    <header className="bg-gradient-to-b from-[#3D1528] to-[#A3386C] shadow-sm border-b border-gray-200 px-7 py-3 z-10">
                        <div className="flex items-center justify-between">
                            <button onClick={toggleSidebar} className="text-white p-2 rounded-full hover:bg-white/20"><Menu className="w-6 h-6" /></button>
                            <div className="flex items-center"><img src="/src/assets/Logo.png" alt="UIC Logo" className="w-15 h-15 mr-2"/><h1 className="text-white text-[28px] font-semibold">MEDITRACK</h1></div>
                            <div className="flex items-center"><Bell className="w-6 h-6 text-white cursor-pointer" /></div>
                        </div>
                    </header>

                    {/* Dashboard Content */}
                    <main className="flex-1 p-6 overflow-y-auto bg-white">
                        {userRole === 'Nurse' && <NurseDashboard />}
                        {userRole === 'Doctor' && <DoctorDashboard />}
                        {userRole === 'Patient' && <PatientDashboard />}
                    </main>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
