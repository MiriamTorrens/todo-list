
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

export default function Task (props){
    const {task, deleteTask} = props;
    const {idTask, taskName, categoryTask} = task;
  
    return (
        <Box sx={{ width:500, height:50, margin:'0 auto', border:"1px solid purple", display:"flex", borderRadius:3, marginTop:2, justifyContent:"space-between"}}>
            <Box sx={{display:'flex', marginTop:0.5}}>
                <TaskAltIcon sx={{marginTop:1, color:"purple", marginLeft:3}}/>
                <Typography variant="h6" sx={{marginTop:0.5, marginLeft:2}}>{taskName}</Typography>
            </Box>
            <Box>
                <DeleteIcon sx={{marginRight:2, color:"purple", marginTop:1}} onClick={()=> deleteTask(idTask)}/>
                <Chip label={categoryTask} variant="filled" sx={{backgroundColor:'rgb(236,232,255)', color:'purple', borderRadius:3, height:50, width:100, borderLeft:'2px solid purple', fontSize:'large', marginBottom:1}} /> 
            </Box>
        </Box>
    );
}