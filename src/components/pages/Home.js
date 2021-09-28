import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core';
import Details from './Details';
import News from './News';
import Login from './Login';
import Signup from './Signup';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        background: "white",
    },
    typographyStyle: {
        color: "black",
        paddingTop: 20,
    }
}))

const Home = () => {
    const classes = useStyles();
    return (        
        <>
        <Container fixed style={{backgoundColor:"skyblue"}}>
            <Grid container spacing={2} className={classes.grid}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" className={classes.typographyStyle}>
                        Amazing <br /> Experiences from Our <br />Wonderful Customers
                    </Typography>          
                    <Typography variant="body1" className={classes.typographyStyle}>
                        Amazing Experiences from Our Wonderful Customers Experiences from Our Wonderful Customers Experiences from Our Wonderful Customers
                    </Typography>             
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="/images/mars.jpg" alt="" />
                </Grid>
            </Grid>
        </Container>      
        <News />
        <Details />
        <Login />
        <Signup />
        </> 
    )
}

export default Home;
