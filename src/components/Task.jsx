import '../styles/task.css';
import { AiOutlineClose } from "react-icons/ai";

function Task ({ id, text, done, taskDone, deleteTask }) {
  return (
    <div className={ done ? 'task-container task-done' : 'task-container'}>
      <div
        className='task-text'
        onClick={() => taskDone(id)}>
        {text}
      </div>
      <div
        className='task-container-icons'
        onClick={() => deleteTask(id)}>
        <AiOutlineClose className='task-icons' />
      </div>
    </div>
  )
}

export default Task;
