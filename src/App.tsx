import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Search/Student";
import Employee from "./pages/Search/Employee";
import Community from "./pages/Search/Community";
import InventDashboard from "./pages/Inventory/InventDashboard";
import Stocks from "./pages/Inventory/Stocks";
import History from "./pages/Inventory/History";
import Reports from "./pages/Reports";
import Print from "./pages/Print";
import About from "./pages/About";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Appointment from "./pages/Appointment";
import NurseAppointments from "./pages/Nurse/Appointments";
import { PERMISSIONS } from "./config/roles";

// A simple protected route component
const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userRole = localStorage.getItem("userRole");
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (userRole && PERMISSIONS[userRole] && PERMISSIONS[userRole].includes(location.pathname)) {
    return children;
  }

  // Redirect to a default page or show an unauthorized message
  return <Navigate to="/dashboard" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/search/student" element={<ProtectedRoute><Student /></ProtectedRoute>} />
        <Route path="/search/employee" element={<ProtectedRoute><Employee /></ProtectedRoute>} />
        <Route path="/search/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
        <Route path="/inventory/dashboard" element={<ProtectedRoute><InventDashboard /></ProtectedRoute>} />
        <Route path="/inventory/stocks" element={<ProtectedRoute><Stocks /></ProtectedRoute>} />
        <Route path="/inventory/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
        <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
        <Route path="/print" element={<ProtectedRoute><Print /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
        <Route path="/appointment" element={<ProtectedRoute><Appointment /></ProtectedRoute>} />
        <Route path="/nurse/appointments" element={<ProtectedRoute><NurseAppointments /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;