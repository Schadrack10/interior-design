import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SectionTitle from "./SectionTitle";
import Box from "@mui/material/Box";

const Designers = () => {
  return (
    <Box>
      <SectionTitle title="Designers" />
      <Box sx={{ margin: "20px 0" }}>
        <Typography variant="p">
          The best team in the world.
          <br /> <br />
          We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Box>

      <Box
        sx={{
          height: "5vh",
        }}
      >
        <Typography variant="p" sx={{ fontWeight: "800" }}>
          Our designers are thoughtfully chosen:
        </Typography>
      </Box>

      <Grid container columnSpacing={2}>
        <Grid
          item
          md={4}
          sm={4}
          xs={12}
          sx={{ background: "", height: "auto" }}
        >
          <img
            src="https://www.w3schools.com/w3images/team2.jpg"
            alt=""
            style={{ width: "100%" }}
          />
          <Box
            sx={{
              paddingLeft: "16px",
              paddingRight: "8px",
              background: "#eee",
              minHeight: "180px",
              display: "flex",
              flexDirection:'column',
              justifyContent:'space-evenly'
            }}
          >
            <Typography variant="h5">John Doe</Typography>
            <Typography
              sx={{ color: "#aaa", marginTop: "8px", fontWeight: "500" }}
            >
              CEO / DIRECTOR
            </Typography>
            <Typography variant="p">
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          md={4}
          sm={4}
          xs={12}
          sx={{ background: "", height: "auto" }}
        >
          <img
            src="https://www.w3schools.com/w3images/team1.jpg"
            alt=""
            style={{ width: "100%" }}
          />
          <Box
            sx={{
              paddingLeft: "16px",
              paddingRight: "8px",
              background: "#eee",
              minHeight: "180px",
              display: "flex",
              flexDirection:'column',
              justifyContent:'space-evenly'
            }}
          >
            <Typography variant="h5">John Doe</Typography>
            <Typography
              sx={{ color: "#aaa", marginTop: "8px", fontWeight: "500" }}
            >
              CEO / DIRECTOR
            </Typography>
            <Typography variant="p">
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          md={4}
          sm={4}
          xs={12}
          sx={{ background: "", height: "auto" }}
        >
          <img
            src="https://www.w3schools.com/w3images/team3.jpg"
            alt=""
            style={{ width: "100%" }}
          />
          <Box
            sx={{
              paddingLeft: "16px",
              paddingRight: "8px",
              background: "#eee",
              minHeight: "180px",
              display: "flex",
              flexDirection:'column',
              justifyContent:'space-evenly'
            }}
          >
            <Typography variant="h5">John Doe</Typography>
            <Typography
              sx={{ color: "#aaa", marginTop: "8px", fontWeight: "500" }}
            >
              CEO / DIRECTOR
            </Typography>
            <Typography variant="p">
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Designers;
