import { AiOutlineReconciliation } from "react-icons/ai"
import '../styles/header.css'

function Header() {
  return (
    <>
    <div className='header-container'>
        <AiOutlineReconciliation className='list-logo' />
        <h1>MI LISTA DE TAREAS</h1>        
    </div>
    <p>
      Esta utilidad te permitirá organizar organizar tus pendientes y mejorar tu productividad. <br />
      Debes estar registrado para usarla.
    </p>
  </>
  )
}

export default Header