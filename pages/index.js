import Head from 'next/head'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Interior Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container>
        <Grid item md={3} sx={{ background: '#f44336', height: '100vh' }}>
          <Navbar title="header" />
        </Grid>
        <Grid item md={9} sx={{ border: '1px solid red', height: '100vh', overflowY: 'scroll', padding: " 10px 30px" }}>
          {/* please insert code here */}
          <h1>insert code here</h1>
        </Grid>

      </Grid>
    </Box>
  )
}
