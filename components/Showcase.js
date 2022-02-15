import Grid from "@mui/material/Grid";
import SectionTitle from "./SectionTitle";

export default function Showcase() {
  return (
    <>
      <SectionTitle title={"Showcase."} />
      <br />
      <Grid container columnSpacing={2}>
        <Grid
          item
          md={6}
          sm={6}
          xs={12}
          //   sx={{  padding:'16px' }}
        >
          <img
            src="https://www.w3schools.com/w3images/kitchenconcrete.jpg"
            alt=""
            style={{ width: "100%" , marginBottom:'16px'}}
          />

          <img
            src="https://www.w3schools.com/w3images/livingroom.jpg"
            alt=""
            style={{ width: "100%" , marginBottom:'16px'}}
          />

          <img
            src="https://www.w3schools.com/w3images/diningroom.jpg"
            alt=""
            style={{ width: "100%" , marginBottom:'16px'}}
          />
        </Grid>
        <Grid
          item
          md={6}
          sm={6}
          xs={12}
          //   sx={{  padding:'16px' }}
        >
          <img
            src="https://www.w3schools.com/w3images/atrium.jpg"
            alt=""
            style={{ width: "100%" , marginBottom:'16px'}}
          />

          <img
            src="https://www.w3schools.com/w3images/bedroom.jpg"
            alt=""
            style={{ width: "100%" , marginBottom:'16px'}}
          />

          <img
            src="https://www.w3schools.com/w3images/livingroom2.jpg"
            alt=""
            style={{ width: "100%" , marginBottom:'16px'}}
          />
        </Grid>
      </Grid>
    </>
  );
}
