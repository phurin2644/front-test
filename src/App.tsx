import React, { useEffect, type ReactElement } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
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
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { state } = useAuth();
  if (state === "signedIn") {
    return children ? children : <Outlet />;
  }else if (state === "loggedOut") {
    return <Navigate to="/" />;
  }
};
