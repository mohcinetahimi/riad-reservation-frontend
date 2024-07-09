import { useState } from 'react'

import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Example from './components/Auth/Example'
import './App.css'
import { Routes, Route,BrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import AddRiad from './components/Riad/AddRiad'
import {OpenProvider}  from './contexts/OpenContext'
import Riads from './pages/Riads/Riads'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <OpenProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/admin/AddRiad' element={<AddRiad/> }/>
      <Route path ='/admin/Riads' element={<Riads/>}/>
    </Routes>
    </BrowserRouter>
    </OpenProvider>
    
    </>
    
  )
}

export default App
