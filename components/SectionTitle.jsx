import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const SectionTitle = (props) => {
  return (
      <Box sx={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
    <h1 style={{color:"#f44336"}}>
        {props.title}
    </ h1>
    <Box  style={{background:"#f44336",height:"5px",border:"none",borderRadius:"20px" , width:"100px"}}></Box>
    </Box>
  )
}

export default SectionTitle