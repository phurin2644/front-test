// import { Route, Routes } from 'react-router'
// import './App.css'
// import Flow from './pages/Flow'
// import Dashboard from './pages/Dashboard'
// import Users from './pages/Users'
// import InfoList from './pages/InfoList'
// import Login from './pages/Login'
// import { useState } from 'react'

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   function handleLogin(){
//     setLoggedIn(true)
//   }
//   console.log(loggedIn)

//   return (
//     <>
      
//       <Routes>
//         <Route path='/' element={<Login login={handleLogin} />}></Route>
//         <Route path='/card' element={<InfoList />}></Route>
//         <Route path='/flow' element={<Flow />}></Route>
//         <Route path='/dashboard' element={<Dashboard />}></Route>
//         <Route path='/user' element={<Users />}></Route>
//       </Routes>
      
      
//     </>
//   )
// }

// export default App


//want to use this version

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
        <Route path="/user" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
