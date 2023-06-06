import { useState } from 'react';
import '../styles/task-form.css';
import { v4 as uuidv4} from 'uuid';
import { database } from '../firebase/firebase';
import { ref, set } from 'firebase/database';

function TaskForm(props) {

  const [task, setTask] = useState('');

  const handleChange = (e)=> {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const uuid = uuidv4();
    const newTask = {
      id: uuid,
      text: task,
      done: false
    }
    set(ref(database, `/${uuid}`), {
      newTask,
    })
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
          name='text'
          onChange={handleChange}
        />
        <button className='task-button'>+</button>
      </form>
    </>
  )
}

export default TaskForm;
