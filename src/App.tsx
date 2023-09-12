import { Route, Routes } from 'react-router'
import './App.css'
import Flow from './pages/Flow'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import InfoList from './pages/InfoList'
import Login from './pages/Login'
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  function handleLogin(){
    setLoggedIn(true)
  }
  function handleLogout(){
    setLoggedIn(false)
  }
  console.log(loggedIn)

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Login login={handleLogin} />}></Route>
        <Route path='/card' element={<InfoList />}></Route>
        <Route path='/flow' element={<Flow />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/user' element={<Users />}></Route>
      </Routes>
      
      
    </>
  )
}

export default App
