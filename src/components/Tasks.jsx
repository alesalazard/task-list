import '../styles/tasks.css';
import { AiOutlineClose } from "react-icons/ai";
import TaskForm from './TaskForm';
 
// eslint-disable-next-line react/prop-types
function Tasks({ text, done }) {
  
  return (
    <div className='main-list-container'>
      <h1>Mis Tareas</h1>
      <TaskForm />
        <div className={ done ? 'task-container task-done' : 'task-container'}>
        <div className='task-text'>
          {text='hola'}
        </div>
        <div className='task-container-icons'>
          <AiOutlineClose className='task-icon' />
        </div>
        </div>
    </div>
  )
}

export default Tasks
