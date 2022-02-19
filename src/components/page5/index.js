import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
const useStyles = makeStyles({
  rootPage: {
    height: '100vh',
    width: '100vw',
    background: 'black',
    color: 'white',
    padding: '5vw',
    boxSizing: 'border-box',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
  },
});
const Page5 = () => {
  const classes = useStyles();

  return (
    <div className={classes.rootPage} id='page'>
      <Typography
        variant='whiteH1'
        marginBottom={'4rem'}
        borderBottom={'2px solid red'}
      >
        contact.
      </Typography>
      <br />
      <a href='mailto:hopansh.gahlot@gmail.com?subject = Feedback&body = Message'>
        <Typography variant='whiteH3'>hopansh.gahlot@gmail.com</Typography>
      </a>
      <br />
      <a href='tel:8791864585'>
        <Typography variant='whiteH3'>+91-7017585874</Typography>
      </a>
      <br />
      <div style={{ marginTop: '1rem' }}>
        <a href='http://github.com/hopansh' target={'_blank'} rel='noreferrer'>
          <GitHub
            htmlColor='#fff'
            sx={{
              fontSize: '4rem',
              marginRight: '1rem',
              '&:hover': { color: 'red' },
            }}
          />
        </a>

        <a
          href='https://www.linkedin.com/in/hopansh-gahlot-596406183/'
          target={'_blank'}
          rel='noreferrer'
        >
          <LinkedIn
            htmlColor='#fff'
            sx={{
              fontSize: '4rem',
              marginRight: '1rem',
              '&:hover': { color: 'red' },
            }}
          />
        </a>
        <a
          href='https://www.instagram.com/hopansh_gahlot/'
          target={'_blank'}
          rel='noreferrer'
        >
          <Instagram
            htmlColor='#fff'
            sx={{
              fontSize: '4rem',
              marginRight: '1rem',
              '&:hover': { color: 'red' },
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Page5;
