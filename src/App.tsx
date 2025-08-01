import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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

// A simple protected route component
const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" />;
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
      </Routes>
    </Router>
  );
};

export default App;