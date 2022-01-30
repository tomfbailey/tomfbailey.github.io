import './App.css'
import React, {useEffect, useState} from "react"
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'

const theme_config = {
  root: {
    zIndex: 1,
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: 128,
      fontWeight: 800,
    },
    h2: {
      fontSize: 48,
      fontWeight: 600,
    },
    h3: {},
    h4: {},
    h5: {
      fontSize: 20,
      fontWeight: 500,
    },
    h6: {
      fontSize: 16,
      fontWeight: 500,
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#ffffff',
    },
    text: {
      primary: '#ffffff',
    },
  },
}

let theme = createTheme(theme_config);
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={5}>
            <Typography color="white" align="center" variant="h1">
              Tom Bailey
            </Typography>
       </Grid>
       <Grid item xs={5}>
         <Typography color="white" align="center" variant="h2">
           Welcome to my website!
         </Typography>
       </Grid>
       <Grid item xs={5}>
         <Stack direction="row" spacing={0}>
           <Typography color="white" align="center" variant="h5">
             🚧👷Currently under construction - please check back later.
           </Typography>
         </Stack>
       </Grid>
       <Grid item xs={5}>
           <Typography color="#999999" align="center" variant="h6">
             ⚛️Built with React.js.
           </Typography>
       </Grid>
     </Grid>
     </ThemeProvider>
  )
}

export default App
