import React from "react";
import Typography from "@mui/material/Typography";
import SectionTitle from "./SectionTitle";
import Box from "@mui/material/Box";

const Services = () => {
  return (
    <Box sx={{margin:"20px 0"}}>
      <SectionTitle title="services" />
      <Box sx={{margin:"20px 0"}}>
      
      
      <Typography variant="p" >
        We are a interior design service that focus on what's best for your home
        and what's best for you! 
        <br /> <br />
        Some text about our services - what we do and
        what we offer. We are lorem ipsum consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Typography>
      
      
      </Box>
    </Box>
  );
};

export default Services;
