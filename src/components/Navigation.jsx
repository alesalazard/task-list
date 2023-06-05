import { Link } from 'react-router-dom';
import '../styles/navigation.css';

function Navigation() {
  return (
   <nav className='nav'>
    <Link to='/'>Home</Link>
    <Link to='Register'>Register</Link>
    <Link to='Dashboard'>Lista de Tareas</Link>
   </nav>
  )
}

export default Navigation
