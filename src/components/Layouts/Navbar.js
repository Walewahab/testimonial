import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {Link } from "react-router-dom";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar:{
    color: "black", 
    background: "white",
  },
  title2: {
    flexGrow: 1, 
  },
  link: {
    textDecoration: "none",
    paddingLeft: "20px",
    color: "black",
  },
  links: {
    textDecoration: "none",
    paddingLeft: "300px",
    color: "black",
  },
 
  linky: {
    textDecoration: "none",
    paddingLeft: "700px",
    color: "black",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        
          </IconButton>
          <Typography variant="h6">
            <img src="./images/mars.jpg" alt="logo" width="80" />
          </Typography>
          <Link className={classes.linky} to="/">STORIES</Link>          
          <Link className={classes.link} to="/">STORIES</Link>
          <Link className={classes.link} to="/">CONTACT</Link>
          <Link className={classes.link} to="/">LOG IN</Link>
          <Button variant="contained" color="secondary">
          <Link className={classes.link} to="/">SIGN UP</Link>       
          </Button>
        </Toolbar>
      </AppBar>
      <AppBartwo />
    </div>
    
  );
}

 function AppBartwo() {
    const classes = useStyles();
  
    return (
        
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar} elevation={0}>
          <Toolbar>            
          
            <Link className={classes.links} href="/">MARKETPLACE</Link>
            <Link className={classes.link} href="/">WHOLESALE CENTER</Link>
            <Link className={classes.link} href="/">SELLER CENTER</Link>
            <Link className={classes.link} href="/">SERVICE</Link>
            <Link className={classes.link} href="/">INTERNSHIP</Link>
            <Link className={classes.link} href="/">EVENTS</Link>
                  
          </Toolbar>
        </AppBar>
      </div>
    );
  }
 