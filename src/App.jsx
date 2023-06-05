import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Login from './components/Login';
import Register from './components/Register';
import Navigation from './components/Navigation';
import List from './components/List';
// import { AuthProvider } from './context/authContext';

function App() {
  return (
    // <AuthProvider>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/List' element={<List />}></Route>
        </Routes>
      </BrowserRouter>
    // </AuthProvider>
  )
}

export default App
