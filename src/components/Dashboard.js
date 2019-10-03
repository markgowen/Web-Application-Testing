import React, { useState } from 'react';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Styles
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

// Functions
export const addStrike = currentStrikes => {
  if (currentStrikes >= 2) {
    return 0;
  } else return currentStrikes + 1;
};

export const addBall = currentBalls => {
  if (currentStrikes >= 3) {
    return 0;
  } else return currentBalls + 1;
};

export const addFoul = currentStrikes => {
  if (currentStrikes >= 2) {
    return currentStrikes;
  } else return currentStrikes + 1;
};

export const hit = currentValue => {
  return (currentValue = 0);
};

export default function Dashboard() {
  const [strikes, setStrike] = useState(0);
  const [balls, setBall] = useState(0);

  return (
    <div>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => setStrikes(addStrike(strikes))}
      >
        Strike
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => setBalls(addBall(balls))}
      >
        Ball
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => setStrikes(addFoul(strikes))}
      >
        Foul
      </Button>
      <Button variant="outlined" className={classes.button}>
        Hit
      </Button>
    </div>
  );
}
