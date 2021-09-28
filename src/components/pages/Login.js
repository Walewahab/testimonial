import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',
        background: "white",
    },
    btn: {
        color: "white",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    typographyStyle: {
        color: "black",
        paddingTop: 20,
        paddingRight: 60,
    },
    container: {
        backgroundColor: "black",
    },
    typo: {
        color: "red",
        marginTop: 30,
    },
}))

const Home = () => {
    const classes = useStyles();
    return (        
        
            <Grid container spacing={2} className={classes.grid}>
                <Grid item xs={12} md={6} style={{paddingLeft: "88px"}}>
                    <Typography variant="h4" className={classes.typographyStyle}>
                        Tolu & Joy's Experiences
                    </Typography>          
                    <Button variant="outlined" color="primary">CUSTOMERS</Button>
                    <Typography variant="body1" className={classes.typographyStyle}>
                    Amazing Amazing Experiences from Our Wonderful Customers Experiences Experiences from Our ces from Our Wonderful Customers Experiences Experiences from Our ces from Our Wonderful Customers Experiences Experiences from Our Wonderful Customers Experiences Amazing Experiences from Our Wonderful Customers Experiences from Our Wonderful Customers Experiences from Our Wonderful Customers
                    </Typography>  
                    <Typography variant="body1" className={classes.typo}>
                    Amazing Amazing Experiences from
                    </Typography>           
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="/images/mars.jpg" alt="" style={{paddingLeft: 60}}/>
                </Grid>
            </Grid>
                  

    )
}

export default Home;

