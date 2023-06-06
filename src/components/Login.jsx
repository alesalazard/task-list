import { useState } from "react";
import "../styles/login.css";
import { loginUser } from "../firebase/firebase";
import { useNavigate } from "react-router";
import Header from "./Header";
import { AiOutlineTeam } from 'react-icons/ai'
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user.email, user.password);
    try {
      await loginUser(user.email, user.password);
      alert("Comienza a escribir tus tareas");
      navigate("/list");
    } catch (error) {
      alert("Ingrese las credenciales correctas");
    }
  };

  return (
    <div className='main-container-login'>
      <Header />
      <h2>Ingreso de Usuarios</h2>
      < AiOutlineTeam className='login-icon' />
      <form onSubmit={handleSubmit}>
        <label>
          Ingrese su correo
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
        <button>Ingresar</button>
      </form>
      <p className='user-create-link'>
        Crea tu usuario<Link to='Register'>Aquí</Link>
      </p>
    </div>
  );
}

export default Login;
