import '../styles/task-form.css';

function TaskForm() {
  return (
    <>
      <form action='' className='task-form'>
        <input 
          type='text'
          className='task-input'
          placeholder='Escribe una Tarea'
          name='texto'
        />
        <button className='task-button'>Agregar</button>
      </form>
    </>
  )
}

export default TaskForm;
