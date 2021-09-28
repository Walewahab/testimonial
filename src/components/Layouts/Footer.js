import React from 'react';
import { Container } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";


const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer-middle">
        <footer>
        <StackTop />
            <Box>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={3}>
                            <Box className="footer-middl">Help</Box>
                            <Box>
                                <Link href="/">Contact</Link>
                            </Box>
                            <Box>
                                <Link href="/" >Support</Link>
                            </Box>
                            <Box>
                                <Link href="/">Privacy</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box className="footer-middl">Helper</Box>
                            <Box>
                                <Link href="/">Contact</Link>
                            </Box>
                            <Box>
                                <Link href="/">Support</Link>
                            </Box>
                            <Box>
                                <Link href="/">Privacy</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box className="footer-middl">Account</Box>
                            <Box>
                                <Link href="/">Account</Link>
                            </Box>
                            <Box>
                                <Link href="/">Login</Link>
                            </Box>
                            <Box>
                                <Link href="/">Register</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box className="footer-middl">Messages</Box>
                            <Box>
                                <Link href="/">Backup</Link>
                            </Box>
                            <Box>
                                <Link href="/">History</Link>
                            </Box>
                            <Box>
                                <Link href="/">Mall</Link>
                            </Box>
                        </Grid>
                        
                    </Grid>
                    <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 10}}>
                        Vasiti&reg;{new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>            
        </footer>
        </div>
        </FooterContainer>
    )    
};
export default Footer;

function StackTop() {
    return (
        <FooterContainer className="main-footer">
        
    <footer>
        <Container fixed>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
                <img src="/images/mars.jpg" alt="" />
            </Grid>
            <Grid item xs={12} md={6} className="footer-middl">           
                <Typography variant="h3">
                   Be a member <br /> of our community
                </Typography>          
                <Typography variant="body1">
                    Amazing Experiences from Our Wonderful Customers Experiences from Our Wonderful Customers Experiences from Our Wonderful Customers
                </Typography>    
            </Grid>
        </Grid>
    </Container> 
     </footer>
     </FooterContainer>
    )

}

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    color: var(--mainWhite);
    font-weight: 800
    font-family: "";  
    
},
.footer-middl {
padding-top: 35px;
padding-bottom: 35px;
color: var(--mainWhite);
},
.middl {
    padding-bottom: 35px;
}
`;