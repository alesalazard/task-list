import { useState } from "react";
import { createUser } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Register() {

  const [user, setUser] = useState({
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
    createUser (user.email, user.password);
    alert ('Usuario Creado exitosamente')
    navigate ('/')
    } catch (error) {
      alert('No se pudo hacer el registro')
    }
  };

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
            placeholder='Contraseña'
            onChange={handleChange}
          />
        </label>
        {/* falta esta validacion, solo se renderiza */}
        <label>
          Repita su contraseña 
          <input
            type='password'
            name='password'
            placeholder='Repita su Contraseña'
            onChange={handleChange}
          />
        </label>
        <button>Registrar</button>
      </form>
    </>
  );
}

export default Register;
