import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Login from './components/Login';
import Register from './components/Register';
import TaskList from './components/TaskList';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/TaskList' element={<TaskList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
