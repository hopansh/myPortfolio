import { Button, Grid, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
const useStyles = makeStyles({
  root: {
    background: 'black',
    color: 'white',
    padding: '2rem 2rem',
    margin: '1rem',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    height: '12rem',
    boxShadow: '0.8rem 0.8rem 1.5rem gray',
    '&:hover': {
      background: 'white',
      color: 'black',
    },
  },
});
const CustomCard = ({ title, desc, viewLink }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} md={4} lg={3}>
      <div className={classes.root}>
        <Tooltip title={title} placement='top'>
          <Typography
            variant='h5'
            borderBottom={'2px solid red'}
            maxWidth={'100%'}
            textOverflow={'ellipsis'}
            whiteSpace={'nowrap'}
            overflow={'hidden'}
          >
            {title}
          </Typography>
        </Tooltip>

        <Typography variant='body1'>{desc}</Typography>
        <Button href={viewLink} variant='contained' target={'_blank'}>
          View
        </Button>
      </div>
    </Grid>
  );
};

export default CustomCard;
