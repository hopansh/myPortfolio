import { makeStyles } from '@mui/styles';
import React from 'react';
import NavButtons from '../navButtons';
import Page1 from '../page1';
import Page2 from '../page2';
import Page3 from '../page3';
import Page4 from '../page4';
import Page5 from '../page5';
const useStyles = makeStyles({
  root: {
    width: '100vw',
  },
});
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavButtons />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </div>
  );
};

export default Home;
