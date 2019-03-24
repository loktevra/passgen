import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function App() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="title" color="inherit">Генератор паролей</Typography>
      </Toolbar>
    </AppBar>
  )
}