import { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import '../styles/dashboard.css';
 
function Dashboard() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  }

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !==id);
    setTasks(updatedTasks);
  }

  const taskDone = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(updatedTasks);
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
                taskDone={taskDone}
                deleteTask={deleteTask}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
