import '../styles/tasks.css';
import { AiOutlineClose } from "react-icons/ai";
 
// eslint-disable-next-line react/prop-types
function Task({ id, text, done, taskDone, deleteTask }) {
  
  return (
    <>
      <div className={ done ? 'task-container task-done' : 'task-container'}>
        <div 
          className='task-text'
          onClick={() => taskDone(id)}>
          {text}
        </div>
        <div 
          className='task-container-icons'
          onClick={() => deleteTask(id)}>
          <AiOutlineClose className='task-icon' />
        </div>
      </div>
    </>
  )
}

export default Task;
