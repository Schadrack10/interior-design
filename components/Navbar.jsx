import React from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import Grid from "@mui/material/Grid";

const Navbar = () => {
  return (
    <nav
      style={{
        color: "white",
        padding: "30px 24px",
        fontFamily: "poppins,sans-serif",
        height: "100%",
        width: "100%",
      }}
    >
      <h1
        style={{
          height: "200px",
          fontWeight: "bolder",
          fontSize: "25px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Company Name
      </h1>

      <Box sx={{ fontWeight: "bolder", fontSize: "18px" }}>
        <Box
          sx={{
            height: "40px",

            display: "flex",
            padding: "0 10px",
            alignItems: "center",
            "&:hover": {
              background: "white",
              color: "black",
            },
          }}
        >
          <Link href="/" sx={{ fontWeight: "bold", fontSize: "25px" }}>
            Home
          </Link>
        </Box>
        <Box
          sx={{
            height: "50px",
            display: "flex",
            padding: "0 10px",
            alignItems: "center",
            "&:hover": {
              background: "white",
              color: "black",
            },
          }}
        >
          <Link href="/" sx={{ fontWeight: "bold", fontSize: "25px" }}>
            Showcase
          </Link>
        </Box>
        <Box
          sx={{
            height: "40px",
            padding: "0 10px",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              background: "white",
              color: "black",
            },
          }}
        >
          <Link href="/" sx={{ fontWeight: "bold", fontSize: "25px" }}>
            Services
          </Link>
        </Box>
        <Box
          sx={{
            height: "40px",
            display: "flex",
            padding: "0 10px",
            alignItems: "center",
            "&:hover": {
              background: "white",
              color: "black",
            },
          }}
        >
          <Link href="/" sx={{ fontWeight: "bold", fontSize: "25px" }}>
            Designers
          </Link>
        </Box>
        <Box
          sx={{
            height: "40px",
            display: "flex",
            padding: "0 10px",
            alignItems: "center",
            "&:hover": {
              background: "white",
              color: "black",
            },
          }}
        >
          <Link href="/" sx={{ fontWeight: "bold", fontSize: "25px" }}>
            Package
          </Link>
        </Box>
        <Box
          sx={{
            height: "40px",

            display: "flex",
            padding: "0 10px",
            alignItems: "center",
            "&:hover": {
              background: "white",
              color: "black",
            },
          }}
        >
          <Link href="/">Contact</Link>
        </Box>
      </Box>
    </nav>
  );
};

export default Navbar;
