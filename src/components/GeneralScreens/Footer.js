import React from 'react';
import { styled } from "@mui/material";
import { Container, Grid, Typography, IconButton, Link } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const StyledFooter = styled("footer")({
  backgroundColor: "#d3d3d31f",
  color: "#333333",
  padding: "2rem",
  zIndex: "5"
});

const StyledTypo = styled(Typography)`
    & > a {
        padding: 5px 0px;
        font-weight: bolder;
    }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Navigation */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <styledTypo variant="body2" component="div">
              <Link href="#" color="inherit" underline="hover">Home</Link>
              <br />
              <Link href="#" color="inherit" underline="hover">About Us</Link>
              <br />
              <Link href="#" color="inherit" underline="hover">Services</Link>
              <br />
              <Link href="#" color="inherit" underline="hover">Contact</Link>
            </styledTypo>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              <IconButton color="inherit" href="tel:+1234567890">
                <PhoneIcon />
              </IconButton>
              +91 12345 67890
              <br />
              <IconButton color="inherit" href="mailto:info@example.com">
                <EmailIcon />
              </IconButton>
              info@example.com
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" gutterBottom>
              Connect with Us
            </Typography>
            <div>
              <IconButton color="inherit" href="#">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="#">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href="#">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" href="#">
                <InstagramIcon />
              </IconButton>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="body2">
              © {new Date().getFullYear()} Trendy Tales. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
