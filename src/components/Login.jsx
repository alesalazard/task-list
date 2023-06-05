import { useState } from 'react';
import '../styles/login.css';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  
  return (
    <div>
      <h1>Ingreso de Usuarios</h1>
      <form >
        <label>Ingrese su correo<input type='email' placeholder='usuario@email.com' /></label>
        <label>Ingrese su contraseña<input type='password' placeholder='contraseña' /></label>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Login;
