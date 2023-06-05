import { useState } from 'react';
import '../styles/task-form.css';
import { v4 as uuidv4} from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      done: false
    }
    console.log(newTask);
    props.onSubmit(newTask);
  }

  return (
    <>
      <form
        className='task-form'
        onSubmit={handleSubmit}>
        <input 
          type='text'
          className='task-input'
          placeholder='Escribe una Tarea'
          name='texto'
          onChange={handleChange}
        />
        <button className='task-button'>Agregar</button>
      </form>
    </>
  )
}

export default TaskForm;
