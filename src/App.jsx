import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
// import { AuthProvider } from './context/authContext';

function App() {
  return (
    // <AuthProvider>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    // </AuthProvider>
  )
}

export default App
