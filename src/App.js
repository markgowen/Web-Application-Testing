import React from 'react';
import './App.css';

// Material UI
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// Components
import Display from './components/Display'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: '#092668',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar} variant='dense'>
          <Typography variant='h6' color='inherit'>
            Pirates vs Cardinals
          </Typography>
        </Toolbar>
      </AppBar>
      <Display />
    </div>
  );
}

export default App;
