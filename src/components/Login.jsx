import { useState } from 'react';
import { loginUser } from '../firebase/firebase';
import { useNavigate } from 'react-router';
import { AiOutlineTeam } from 'react-icons/ai'
import '../styles/login.css';

function Login() {
  const [user, setUser] = useState({
    login: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(user.email, user.password);
      alert('Comienza a escribir tus tareas');
      navigate('/dashboard');
    } catch (error) {
      alert('Ingrese unas credenciales válidas');
    }
  };

  return (
    <div className='main-container-login'>
      <h2>Ingreso de Usuarios</h2>
      < AiOutlineTeam className='login-icon' />
      <form onSubmit={handleSubmit}>
        <label>
          Ingresa tu correo
          <input
            type='email'
            name='email'
            placeholder='usuario@email.com'
            onChange={handleChange}
          />
        </label>
        <label>
          Ingresa tu contraseña
          <input
            type='password'
            name='password'
            placeholder='contraseña'
            onChange={handleChange}
          />
        </label>
        <button>Ingresar</button>
      </form>
      <p className='user-create-link'>
        Crea tu usuario <a href='/register'>aquí</a>
      </p>
    </div>
  );
}

export default Login;
