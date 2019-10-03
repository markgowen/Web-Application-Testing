import React from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Styles
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: 30
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

// Functions
export const addStrike = currentStrikes => {
    console.log(currentStrikes)
  if (currentStrikes >= 2) {
    return 0;
  } else return currentStrikes + 1;
};

export const addBall = currentBalls => {
  if (currentBalls >= 3) {
    return 0;
  } else return currentBalls + 1;
};

export const addFoul = currentStrikes => {
  if (currentStrikes >= 2) {
    return currentStrikes;
  } else return currentStrikes + 1;
};

export const hit = (setStrikes, setBalls) => {
  setStrikes(0)
  setBalls(0)
};

export default function Dashboard(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => props.setStrikes(addStrike(props.strikes))}
      >
        Strike
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => props.setBalls(addBall(props.balls))}
      >
        Ball
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => props.setStrikes(addFoul(props.strikes))}
      >
        Foul
      </Button>
      <Button 
        variant="outlined" 
        className={classes.button}
        onClick={() => hit(props.setStrikes, props.setBalls)}

      >
        Hit
      </Button>
    </div>
  );
}
