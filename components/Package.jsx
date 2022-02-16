import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SectionTitle from "./SectionTitle";
import Button from '@mui/material/Button';

const Packages = () => {
  return (
    <Box sx={{ height: "400px" }}>
      <SectionTitle title="Packages" />
      <Box sx={{ margin: "30px 0" }}>
        <Typography variant="p">
          Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure
        </Typography>
      </Box>
      <Grid container>
        <Grid item md={6} sx={{ height: "600px", padding: "10px" }}>
          <Box sx={{ height: "100%", background: "#ddd" }}>
            <Box
              sx={{
                height: "100px",
                background: "grey",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "25px",
              }}
            >
              BASIC
            </Box>
            <Box
              sx={{
                height: "60px",
                border: "1px solid lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Floorplanning
            </Box>
            <Box
              sx={{
                height: "60px",
                border: "1px solid lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              10 hours support
            </Box>
            <Box
              sx={{
                height: "60px",
                border: "1px solid lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Photography
            </Box>
            <Box
              sx={{
                height: "60px",
                border: "1px solid lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              20% furniture discount
            </Box>
            <Box
              sx={{
                height: "60px",
                border: "1px solid lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              good Deals
            </Box>
            <Box
              sx={{
                height: "80px",
                border: "1px solid lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              $ 199 <br />
              per room
            </Box>
            <Box
              sx={{
                height: "80px",
                border: "1px solid lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
                  <Button variant="contained" sx={{background:"white",color:"black"}}>Sign Up</Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} sx={{ height: "600px", padding: "10px" }}>
          <Box sx={{ height: "100%", background: "#ddd" }}>
            <Box
              sx={{
                height: "100px",
                background: "#f44336",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "25px",
              }}
            >
              PRO
            </Box>
            <Box
              sx={{
                height: "60px",
                border: "1px solid lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Floorplanning
            </Box>
            <Box
              sx={{
                height: "60px",
                border: "1px solid lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              10 hours support
            </Box>
            <Box
              sx={{
                height: "60px",
                border: "1px solid lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Photography
            </Box>
            <Box
              sx={{
                height: "60px",
                border: "1px solid lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              50% furniture discount
            </Box>
            <Box
              sx={{
                height: "60px",
                border: "1px solid lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              good Deals
            </Box>
            <Box
              sx={{
                height: "80px",
                border: "1px solid lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              $ 199 <br />
              per room
            </Box>
            <Box
              sx={{
                height: "80px",
                border: "1px solid lightgrey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
             <Button variant="contained" sx={{background:"red"}}>Sign Up</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Packages;
