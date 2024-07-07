import { useState } from 'react'

import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Example from './components/Auth/Example'
import './App.css'
import { Routes, Route,BrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </BrowserRouter>
    
    </>
    
  )
}

export default App
