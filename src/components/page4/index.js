import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import CustomCard from '../shared/customCard';
const useStyles = makeStyles({
  rootPage: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-evenly',
    padding: '5vw',
    boxSizing: 'border-box',
  },
});
const Page4 = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootPage} id='page'>
      <Typography variant='h1'>projects.</Typography>
      <Grid container justifyContent={'space-between'}>
        <CustomCard
          title='COVID Tracker'
          desc='Android app to track covid cases around the world. Developed using Flutter.'
          viewLink='https://play.google.com/store/apps/details?id=com.pluto.TrackCount'
        />
        <CustomCard
          title='Ed. Address'
          desc='React Website to help find nearby tutions, Developed using MERN Stack.'
          viewLink='https://www.edaddress.ga/'
        />
        <CustomCard
          title='Photography Website'
          desc='Personal Photography Website to showcase my photography skills. Developed using reactjs'
          viewLink='http://hopanshphotography.ga/'
        />
        <CustomCard
          title='Ice Breaker Game'
          desc='Android platform game, inspired from retro brick breaker game. Developed using C#'
          viewLink='https://play.google.com/store/apps/details?id=com.HopanshGahlot.IceBreaker'
        />
      </Grid>
    </div>
  );
};

export default Page4;
