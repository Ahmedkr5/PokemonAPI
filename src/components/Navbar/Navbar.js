import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Box from '@mui/material/Box';


export default function Navbar() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{ background: '#ce0000' }}>
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


