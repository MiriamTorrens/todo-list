import { useState, useEffect } from 'react';
import Header from './components/Header';
import InputTask from './components/InputTask';
import TaskContent from './components/TaskContent';

function App() {

  //pasar las tareas a localstorage
  let initialTasks = JSON.parse(localStorage.getItem("tasks"));
  if(!initialTasks) {
    initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(()=> {
    if(initialTasks){
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }else{
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  },[initialTasks, tasks])

  const createTask = (task) => {
    setTasks([...tasks, task]);
  }

  const deleteTask = (id) => {
    const currentTask = tasks.filter((task) => task.idTask !== id)
    setTasks(currentTask);
    
  }

  return (
    <>
      <Header/>   
      <InputTask createTask={createTask}></InputTask>
      <TaskContent tasks={tasks} deleteTask={deleteTask}/>
    </>
  );
}

export default App;
