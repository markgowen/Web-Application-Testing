import React, { useState } from 'react';

// Components
import Dashboard from './Dashboard';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Styling
const useStyles = makeStyles(theme => ({
  root: {
    width: 600,
    display: 'center',
    padding: theme.spacing(3, 2),
    margin: '30px auto'
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 'auto'
  },
  middleRow: {
    width: '30%',
    paddingTop: 30,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: '#898989',
    margin: 'auto',
  },
  bottomRow: {
    paddingTop: 30
  },
  at: {
    color: '#898989',
    fontSize: 16,
  },
  atBat: {
      display: 'flex',
      alignContent: 'center',
    padding: 3,
    fontSize: 12
  },
  teamHeader: {
    color: '#898989',
    fontSize: 12
  },
  team: {
    fontSize: 14
  }
}));

export default function Display() {
  const classes = useStyles();

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  return (
    <div>
      <Paper className={classes.root}>
        <div className={classes.topRow}>
          <Typography variant="h6" component="h3">
            Pirates
          </Typography>
          <Typography className={classes.at} variant="h6" component="h3">
            at
          </Typography>
          <Typography variant="h6" component="h3">
            Cardinals
          </Typography>
        </div>
        <div className={classes.middleRow}>
          <Typography className={classes.atBat} variant="h6" component="h3">
            S
          </Typography>
          {strikes}
          <Typography className={classes.atBat} variant="h6" component="h3">
            B
          </Typography>
          {balls}
          <Typography className={classes.atBat} variant="h6" component="h3">
            0
          </Typography>
        </div>
        <div className={classes.bottomRow}>
          <Typography
            className={classes.teamHeader}
            variant="h6"
            component="h3"
          >
            Team
          </Typography>
          <Typography className={classes.team} variant="h6" component="h3">
            Pirates
          </Typography>
          <Typography className={classes.team} variant="h6" component="h3">
            Cardinals
          </Typography>
        </div>
      </Paper>
      <Dashboard
        setStrikes={setStrikes}
        setBalls={setBalls}
        strikes={strikes}
        balls={balls}
      />
    </div>
  );
}
