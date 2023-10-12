import { useEffect, type ReactElement } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import Flow from "./pages/Flow";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import InfoList from "./pages/InfoList";
import Login from "./pages/Login";
import useAuth from "./utils/auth/useAuth";
import { ToastContainer } from "react-toastify";

function App() {
  const { getAuth, state } = useAuth();
  useEffect(() => {
    getAuth(false);
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={state === "signedIn" ? <Navigate to="/card" /> : <Login />}
        />
        <Route
          path="/card"
          element={
            <ProtectedRoute>
              <InfoList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/flow"
          element={
            <ProtectedRoute>
              <Flow />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute requireRole={["SUPER_ADMIN", "ADMIN"]}>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/card" replace />} />
      </Routes>
    </>
  );
}

export default App;

const ProtectedRoute = ({
  children,
  requireRole,
}: {
  children: ReactElement;
  requireRole?: string[];
}) => {
  const { state, user } = useAuth();

  if (state === "signedIn") {
    if (requireRole && !requireRole.includes(user?.role ?? "")) {
      // If a required role is specified and the user doesn't have it, prevent access
      return <Navigate to="/card" />;
    }

    return children ? children : <Outlet />;
  } else if (state === "loggedOut") {
    return <Navigate to="/" />;
  }
  return null;
};
