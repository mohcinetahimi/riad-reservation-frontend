import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Example from './components/Auth/Example';
import Home from './pages/home/Home';
import AddRiad from './components/Riad/AddRiad';
import { OpenProvider } from './contexts/OpenContext';
import Riads from './pages/Riads/Riads';
import Test from './components/Test';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <OpenProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin/AddRiad' element={<AddRiad />} />
            <Route path='/admin/Riads' element={<Riads />} />
            <Route path='/test' element={<Test />} />
            <Route path='/*' element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </OpenProvider>
    </QueryClientProvider>
  );
}

export default App;
