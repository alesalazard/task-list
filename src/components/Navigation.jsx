import { Link } from 'react-router-dom';
import '../styles/navigation.css';

function Navigation() {
  return (
   <nav className='nav'>
    <Link to='/'>Home</Link>
    <Link to='/register'>Register</Link>
    <Link to='/task'>Task List</Link>
   </nav>
  )
}

export default Navigation
