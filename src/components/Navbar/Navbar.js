import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Box from '@mui/material/Box';
const useStyles = makeStyles(() => ({
 
    AppBar: {
      
    },
  }),
);

export default function Navbar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{ background: '#FF4236' }}>
        <Toolbar>
      <CatchingPokemonIcon/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokemon API
          </Typography>
         
        </Toolbar>
      </AppBar>
      </Box>
  );
}


