import { Route, Routes } from 'react-router'
import './App.css'
import Flow from './pages/Flow'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import InfoList from './pages/InfoList'
import Login from './pages/Login'

function App() {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/card' element={<InfoList />}></Route>
        <Route path='/flow' element={<Flow />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/user' element={<Users />}></Route>
      </Routes>
      
      
    </>
  )
}

export default App
