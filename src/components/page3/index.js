import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import './index.css';
const useStyles = makeStyles({
  rootPage: {
    height: '100vh',
    width: '100vw',
    background: 'black',
    color: 'white',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-evenly',
    padding: '5vw 10vh',
    boxSizing: 'border-box',
  },
});
const Page3 = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootPage}>
      <Typography variant='whiteH1'>languages.</Typography>
    </div>
  );
};

export default Page3;
