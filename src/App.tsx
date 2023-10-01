import React, { useEffect, type ReactElement } from "react";
import { Route, Routes, Navigate, RouteProps, Outlet } from "react-router-dom";
import "./App.css";
import Flow from "./pages/Flow";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import InfoList from "./pages/InfoList";
import Login from "./pages/Login";
import useAuth from "./utils/auth/useAuth";

function App() {
  const { state, getAuth } = useAuth();

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/card"
          element={ <InfoList/>
            // <ProtectedRoute>
            //   <InfoList />
            // </ProtectedRoute>
          }
        />
        <Route path="/flow" element={<Flow />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { state } = useAuth();
  if (state === "signedIn") {
    return children ? children : <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};
