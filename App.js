import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import BusinessDashboard from "./pages/BusinessDashboard";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/freelancer-dashboard"
          element={<ProtectedRoute><FreelancerDashboard /></ProtectedRoute>}
        />
        <Route
          path="/business-dashboard"
          element={<ProtectedRoute><BusinessDashboard /></ProtectedRoute>}
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
