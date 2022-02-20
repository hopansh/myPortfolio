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
  const ele = document.querySelectorAll("*[id^='page']");
  if (type === 'down')
    ele[currentidx % ele?.length].scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  else
    ele[
      currentidx - 2 === -1 ? ele?.length - 1 : currentidx - 2
    ].scrollIntoView({
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
          background: 'red',
          marginBottom: '1rem',
          '&:hover': { color: 'red' },
        }}
      >
        <ArrowUpward />
      </Fab>
      <br />
      <Fab
        size='small'
        aria-label=''
        onClick={navDown}
        sx={{
          color: 'white',
          background: 'red',
          '&:hover': { color: 'red' },
        }}
      >
        <ArrowDownward />
      </Fab>
    </div>
  );
};

export default NavButtons;
