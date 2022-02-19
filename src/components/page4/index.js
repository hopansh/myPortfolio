import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
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
    <div className={classes.rootPage}>
      <Typography variant='h1'>projects.</Typography>
      <div>
        Et incididunt est in excepteur aliqua in ex tempor fugiat commodo nulla.
        In ex consequat velit mollit ex est esse esse officia sint enim. Eu elit
        commodo nulla qui veniam fugiat deserunt est excepteur consequat labore
        ea sit non. Anim laborum eu Lorem pariatur et. Consequat ipsum sint
        reprehenderit commodo laboris ullamco irure sunt culpa.
      </div>
    </div>
  );
};

export default Page4;
