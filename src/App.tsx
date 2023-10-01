import React from 'react';
import { Route, Routes, Navigate, RouteProps } from 'react-router-dom';
import './App.css';
import Flow from './pages/Flow';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import InfoList from './pages/InfoList';
import Login from './pages/Login';
import useAuth from './utils/auth/useAuth';

function App() {
  const { user, state, logOut, getAuth } = useAuth();

  // Determine the user's authentication state
  const loggedIn = state === 'signedIn';

  // Define ProtectedRoute as a component with TypeScript typings
  const ProtectedRoute: React.FC<RouteProps> = ({ element, ...props }) => {
    if (loggedIn) {
      return <Route {...props} element={element} />;
    } else {
      return <Navigate to="/" />;
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login login={getAuth} />} />
        <Route path="/card" element={<InfoList />} />
        <Route path="/flow" element={<Flow />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Use ProtectedRoute for routes that require authentication */}
        <Route path="/user" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
