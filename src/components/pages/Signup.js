import React from 'react';
import NoteCard from './NoteCard';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '60px',
    paddingRight: '60px',
    paddingTop: '30px',
    paddingBottom: '30px',
  },
})

const Details = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.gridContainer}>
      <Grid item xs={12} sm={6} md={4}>
      <NoteCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <NoteCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <NoteCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <NoteCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <NoteCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <NoteCard />
      </Grid>
    </Grid>
  )
}

export default Details;
