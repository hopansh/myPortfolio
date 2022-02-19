import { makeStyles } from '@mui/styles';
import React, { useLayoutEffect, useState } from 'react';
import bg from '../../assets/images/background2.jpg';
import './index.css';
const useStyles = makeStyles({
  rootPage: {
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(45deg, #000 10%, #0C0C0C 40%)',
    color: 'white',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-evenly',
    padding: '5vw 10vh',
    boxSizing: 'border-box',
  },
  homeBg: {
    position: 'absolute',
    height: '100vh',
    right: 0,
    zIndex: 0,
  },
});
const Page1 = () => {
  const classes = useStyles();
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className={classes.rootPage} id='page'>
      {size[0] >= 1024 ? (
        <img src={bg} alt='bgImage' className={classes.homeBg} />
      ) : null}
      <div className='name'>
        Hi! I am <span id='name'>Hopansh Gahlot.</span>
      </div>
      <div className='speciality'>Web Developer</div>
      <a href='/hopanshGahlot.pdf' target='_blank' className='downloadButton'>
        <button className='cvButton'>Download CV</button>
      </a>
    </div>
  );
};

export default Page1;
