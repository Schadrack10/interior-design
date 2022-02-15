import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function HomeSection(){
    return(
        <Box sx={{
            display:'flex',
            alignItems:'flex-end',
            height:'25vh'
        }}>
        <Typography variant="h2" sx={{ fontWeight:"900"}}>Interior Design</Typography>
        </Box>
    )
}