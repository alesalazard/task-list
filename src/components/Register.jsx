
function Register() {
  return (
    <>
      <h1>Registro de Usuarios</h1>
      <form action=''>
        <label>Ingrese un Correo Válido<input type='email' placeholder='usuario@email.com' /></label>
        <label>Ingrese su contraseña<input type='password' placeholder='contraseña' /></label>
        <label>Repita su contraseña<input type='password' placeholder='contraseña' /></label>
        <button>Enviar</button>
      </form>
    </>
  )
}

export default Register
