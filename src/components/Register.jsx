import { useState } from "react";
import { createUser } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Register() {

  const [user, setUser] = useState({
    login: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  
  const handleChange = ({ target: {name, value}}) => 
    setUser({ ...user, [name]: value})

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user.email, user.password);
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
      <form onSubmit={handleSubmit}>
      <label>
          Elija un Nombre de Usuario
          <input
            type='text'
            name='text'
            placeholder='Nombre de Usuario'
            onChange={handleChange}
          />
        </label>
        <label>
          Ingrese un Correo Válido
          <input
            type='email'
            name='email'
            placeholder='su_correo@email.com'
            onChange={handleChange}
          />
        </label>
        <label>
          Ingrese su contraseña
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
    </>
  );
}

export default Register;
