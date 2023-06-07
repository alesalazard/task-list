import { AiOutlineReconciliation } from "react-icons/ai"
import '../styles/home.css'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className='home-container'>
      <div className='main-title'>
        <h1>¿LISTO PARA TU LISTA?</h1> 
      </div>
      <div className='text-container'>
        <AiOutlineReconciliation className='list-icon' />
        <p>
          Esta utilidad te permitirá organizar tus pendientes y mejorar tu productividad. <br />
          Debes estar registrado para usarla.
        </p>
      </div> 
      <button onClick={() => navigate('/login')}>Inicio</button>
    </div>
  )
}

export default Home;