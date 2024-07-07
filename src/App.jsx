import { useState } from 'react'

import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Example from './components/Auth/Example'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </>
    
  )
}

export default App
