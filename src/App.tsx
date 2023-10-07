import { useEffect, type ReactElement } from "react";
import { Route, Routes, Navigate, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Flow from "./pages/Flow";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import InfoList from "./pages/InfoList";
import Login from "./pages/Login";
import useAuth from "./utils/auth/useAuth";

function App() {
  const { getAuth,state } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    getAuth();
  }, []);

  return (
      <Routes>
        <Route path="/" element={
          state === "signedIn"? (<Navigate to= "/card" />
          ): (<Login/>)} />
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
            <ProtectedRoute requireRole={"SUPER_ADMIN"}>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={<Navigate to="/card" replace />}
        />
      </Routes>
  );
}

export default App;


const ProtectedRoute = ({ children,requireRole }: { 
  children: ReactElement;
  requireRole: string; 
}) => {
  const { state,user } = useAuth();

  if (state === "signedIn") {
    if (requireRole && user?.role !== requireRole) {
      // If a required role is specified and the user doesn't have it, prevent access
      return <Navigate to="/card" />;
    }

    return children ? children : <Outlet />;
  }
  else if (state === "loggedOut") {
    return <Navigate to="/" />;
  }
  return null;
};
