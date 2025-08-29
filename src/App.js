import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import MerchantDashboard from "./pages/dashboard/MerchantDashboard";
import MemberDashboard from "./pages/dashboard/MemberDashboard";

import LoginLayout from "./layouts/LoginLayout";
import AdminLogin from "./pages/dashboard/AdminLogin";
import MerchantLogin from "./pages/dashboard/MerchantLogin";
import MemberLogin from "./pages/dashboard/MemberLogin";

import ProtectedRoute from "./features/auth/ProtectedRoute";
import PublicRoute from "./features/auth/PublicRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Root redirect */}
        <Route path="/" element={<Navigate to="/login/admin" replace />} />

        {/* Dashboard routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route
            path="admin"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="merchant"
            element={
              <ProtectedRoute allowedRole="merchant">
                <MerchantDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="member"
            element={
              <ProtectedRoute allowedRole="member">
                <MemberDashboard />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Login routes */}
        <Route path="/login" element={<LoginLayout />}>
          <Route
            path="admin"
            element={
              <PublicRoute role="admin">
                <AdminLogin role="admin" />
              </PublicRoute>
            }
          />
          <Route
            path="merchant"
            element={
              <PublicRoute role="merchant">
                <MerchantLogin role="merchant" />
              </PublicRoute>
            }
          />
          <Route
            path="member"
            element={
              <PublicRoute role="member">
                <MemberLogin role="member" />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
