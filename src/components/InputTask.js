
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export default function InputTask(props){
  const [task, setTask] = useState({
    idTask: "",
    taskName:"",
    categoryTask:""
  });
  const [error, setError] = useState(false);
  const {createTask} = props;
  
  const onChangeTask = (e) => {
   setTask({
     ...task,
     taskName: e.target.value
   });
  }

  const onChangeCategoryTask = (e) => {
    setTask({
      ...task,
      categoryTask: e.target.value
    });
  }

  const onSubmitTask = (e) => {
    e.preventDefault();
    //validación 
    if(task.taskName.trim() === "" || task.categoryTask.trim() === ""){
      setError(true);
      return;
    }
    //eliminar mensaje de error
    setError(false);
    //asignar ID
    task.idTask = uuidv4();
    //crear tarea
    createTask(task);
    //limpiar inputs
    setTask({
      idTask: "",
      taskName:"",
      categoryTask:""
    })
  }

  return(
    <>
    <Box sx={{justifyContent:"center", marginTop:4, display:'flex', marginBottom:5}}>
      <TextField 
        id="outlined-basic" 
        label="Añadir tarea..." 
        variant="outlined" 
        value={task.taskName}
        onChange={onChangeTask}
      />
      <FormControl sx={{width:150, marginLeft:1}}>
        <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
        <Select
          label="Categoría"
          value={task.categoryTask}
          onChange={onChangeCategoryTask}  
        >
          <MenuItem value={'casa'}>Casa</MenuItem>
          <MenuItem value={'deporte'}>Deporte</MenuItem>
          <MenuItem value={'oficina'}>Oficina</MenuItem>
          <MenuItem value={'otra'}>Otra</MenuItem>
        </Select>
      </FormControl><br/>
      <Button variant="contained" startIcon={<AddCircleIcon/>} sx={{backgroundColor:"purple", marginLeft:1}} onClick={onSubmitTask}>Añadir tarea</Button>
    </Box>
     {error && (
      <Alert variant="outlined" severity="error" sx={{width:350, margin:'0 auto'}}>Es obligatorio añadir una tarea y una categoría</Alert>
    )}
    </>
  );
}