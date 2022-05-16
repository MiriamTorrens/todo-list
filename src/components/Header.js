import ListAltIcon from '@mui/icons-material/ListAlt';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header(){
    return(
      <Box sx={{textAlign:"center", marginTop:5}}>
          <Box sx={{borderRadius:50, height:100, width:100, backgroundColor:"purple", textAlign:"center", margin:"0 auto"}}>
            <ListAltIcon sx={{color:"white", fontSize:60, marginTop:2.5}}/>
          </Box>
          <Typography variant="h4" sx={{color:"purple", marginTop:2}}>Lista de tareas</Typography>
      </Box>
    )
}
