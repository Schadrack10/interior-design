import Typography from "@mui/material/Typography";
import SectionTitle from "./SectionTitle";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Contact() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <SectionTitle title={"Contact."} />

      <Typography variant="p">
        Do you want us to style your home? Fill out the form and fill me in with
        the details :) We love meeting new people!
      </Typography>
      <Box
        sx={{
          height: "100%",
        //   background: "pink",
        }}
      >
        <Stack> 
            <Typography variant="h6">Name</Typography>
          <input
            style={{
              width: "100%",
              padding: "12px",
              marginBottom:'16px'
            }}
          />
        </Stack>

        <Stack> 
            <Typography variant="h6">Email</Typography>
          <input
            style={{
              width: "100%",
              padding: "12px",
              marginBottom:'16px'
            }}
          />
        </Stack>

        <Stack> 
            <Typography variant="h6">Message</Typography>
          <textarea rows="5"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom:'16px'
            }}
          />
        </Stack>

            <Stack>
                <Button variant="filled" sx={{
                    background:"#f44336",
                    padding:'16px',
                    color:'#eee',
                    "&:hover":{
                        color:'black'
                    }
                }}>Send Message</Button>
            </Stack>
      </Box>

    
    </Box>
  );
}
