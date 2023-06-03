import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Login from './components/Login';
import Register from './components/Register';
import Task from './components/Tasks';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/Register' element={<Register></Register>}></Route>
          <Route path='/Task' element={<Task></Task>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
