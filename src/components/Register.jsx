import { useState } from "react";
// import { useAuth } from '../context/authContext';

function Register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  // const { signup } = useAuth();

  const handleChange = ({target: {name, value}}) =>
    setUser({...user, [name]: value})
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // signup(user.email, user.password)
  }

  return (
    <>
      <h1>Registro de Usuarios</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Ingrese un Correo Válido
          <input
            type='email'
            name='email'
            placeholder='usuario@email.com'
            onChange={handleChange}
          />
        </label>
        <label>
          Ingrese su contraseña
          <input
            type='password'
            name='password'
            placeholder='contraseña'
            onChange={handleChange}
          />
        </label>
        {/* <label>Repita su contraseña<input type='password' placeholder='contraseña' /></label> */}
        <button>Registrar</button>
      </form>
    </>
  );
}

export default Register;
