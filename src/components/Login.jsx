import '../styles/login.css';

function Login() {
  return (
    <div>
      <h1>Ingreso de Usuarios</h1>
      <form action=''>
        <label>Ingrese su correo<input type='email' placeholder='usuario@email.com' /></label>
        <label>Ingrese su contraseña<input type='password' placeholder='contraseña' /></label>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Login;
