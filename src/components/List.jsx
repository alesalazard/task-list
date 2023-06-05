import { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../styles/list.css';
 
function List() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
    console.log(task.text);
  }
  
  return (
    <div className='main-container'>
      <div className='main-list-container'>
      <h1>Mis Tareas</h1>
        <TaskForm onSubmit={addTask} />
        <div className='task-list-container'>
          {
            tasks.map((task) => 
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                done={task.done}
                // taskDone={taskDone}
                // deleteTask={deleteTask}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default List;
