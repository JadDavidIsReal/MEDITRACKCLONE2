import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "/src/pages/Dashboard";
import Student from "/src/pages/Search/Student";
import Employee from "/src/pages/Search/Employee";
import Community from "/src/pages/Search/Community";
import InventDashboard from "/src/pages/Inventory/InventDashboard";
import Stocks from "/src/pages/Inventory/Stocks";
import History from "/src/pages/Inventory/History";
import Reports from "/src/pages/Reports";
import Print from "/src/pages/Print";
import About from "/src/pages/About";
import Login from "/src/pages/Login";
import Chat from "/src/pages/Chat";
import Appointment from "/src/pages/Appointment";
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
        <Route path="/stocks" element={<ProtectedRoute><Stocks /></ProtectedRoute>} />
        <Route path="/inventory/stocks" element={<ProtectedRoute><Stocks /></ProtectedRoute>} />
        <Route path="/inventory/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
        <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
        <Route path="/print" element={<ProtectedRoute><Print /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
        <Route path="/appointment" element={<ProtectedRoute><Appointment /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;