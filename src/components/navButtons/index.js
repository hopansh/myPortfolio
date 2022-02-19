import { makeStyles } from '@mui/styles';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import React from 'react';
import { Fab } from '@mui/material';
const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '5vh',
    right: '5vw',
    zIndex: 10,
    color: 'red',
  },
});
const changeScroll = (type) => {
  const currentLocation = window.scrollY;
  const windowHeight = window.innerHeight;
  const currentidx = Math.round(
    (currentLocation + windowHeight) / windowHeight
  );
  const ele = document.querySelectorAll("*[class^='makeStyles-rootPage']");
  if (type === 'down')
    ele[Math.min(currentidx, ele?.length - 1)].scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  else
    ele[Math.max(currentidx - 2, 0)].scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
};
const NavButtons = () => {
  const classes = useStyles();
  const navUp = () => {
    changeScroll('up');
  };
  const navDown = () => {
    changeScroll('down');
  };
  return (
    <div className={classes.root}>
      <Fab
        size='small'
        onClick={navUp}
        sx={{
          color: 'white',
          marginBottom: '1rem',
          background: '#303030',
          '&:hover': { color: 'red' },
        }}
      >
        <ArrowUpward />
      </Fab>
      <br />
      <Fab
        size='small'
        onClick={navDown}
        sx={{
          color: 'white',
          background: '#303030',
          '&:hover': { color: 'red' },
        }}
      >
        <ArrowDownward />
      </Fab>
    </div>
  );
};

export default NavButtons;
