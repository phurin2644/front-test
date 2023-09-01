import { Route, Routes } from 'react-router'
import './App.css'
import Flow from './pages/Flow'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Flow />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/user' element={<Users />}></Route>
      </Routes>
      
      
    </>
  )
}

export default App
