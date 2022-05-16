
import Box from '@mui/material/Box';
import Task from './Task';

export default function TaskContent(props){
    const {tasks, deleteTask} = props;

    if(tasks.length === 0){
        return null
    };

    return (
        <Box>
            {tasks.map((task, index) => (
                <Task task={task} key={index} deleteTask={deleteTask}/>
            ))}
        </Box>
    );
}