import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Hardcoded credentials
        if (username === 'nurse' && password === 'password') {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userRole', 'Nurse');
            navigate('/dashboard');
        } else if (username === 'doctor' && password === 'password') {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userRole', 'Doctor');
            navigate('/dashboard');
        } else if (username === 'patient' && password === 'password') {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userRole', 'Patient');
            navigate('/dashboard');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#3D1528] to-[#A3386C]">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
                <div className="flex flex-col items-center">
                    <img src="/Logo.png" alt="Logo" className="w-24 h-24 mb-4" />
                    <h1 className="text-3xl font-bold text-center text-gray-800">MediTrack</h1>
                    <p className="text-center text-gray-500">Please sign in to continue</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <User className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            required
                            className="w-full py-3 pl-10 pr-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3386C] focus:border-transparent"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Lock className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="w-full py-3 pl-10 pr-4 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3386C] focus:border-transparent"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && (
                        <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md">
                            {error}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 text-white bg-gradient-to-r from-[#3D1528] to-[#A3386C] rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A3386C] transition-all duration-300"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
