import { useState } from "react";
import { createUser } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { AiOutlineUserAdd } from 'react-icons/ai'
import '../styles/login.css';

function Register() {

  const [user, setUser] = useState({
    login: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  
  const handleChange = ({ target: { name, value }}) => 
    setUser({...user, [name]: value})

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user.login, user.email, user.password);
    try {
      await createUser (user.email, user.password);
      alert ('Usuario creado exitosamente, ahora loguéate!')
      navigate ('/')
    } catch (error) {
      alert('No se pudo hacer el registro')
    }
  };

  return (
    <>
      <h2>Registro de Usuarios</h2>
      <AiOutlineUserAdd className='login-icon' />
      <form onSubmit={handleSubmit}>
      <label>
          Elige un Nombre de Usuario
          <input
            type='text'
            name='login'
            placeholder='Nombre de Usuario'
            onChange={handleChange}
          />
        </label>
        <label>
          Ingresa tu dirección de correo electrónico
          <input
            type='email'
            name='email'
            placeholder='tu_correo@email.com'
            onChange={handleChange}
          />
        </label>
        <label>
          Ingresa tu contraseña
          <input
            type='password'
            name='password'
            placeholder='Contraseña'
            onChange={handleChange}
          />
        </label>
        {/* falta esta validacion, solo se renderiza */}
        <button>Registrar</button>
      </form>
      <p className='user-create-link'>
        Volver a Login <a href='/login'>click</a>
      </p>
    </>
  );
}

export default Register;
