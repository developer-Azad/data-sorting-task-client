import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png'
import { Button, Typography, Container } from '@mui/material';

const bannerBg={
    background: `url(${bg})`
    
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{...verticalCenter, textAlign: 'left'}} xs={12} md={5}>
          <Box>
          <Typography variant="h3" sx={{mb: 6}} >
            Your New smile <br />
            starts Here
          </Typography>
          <Typography variant="h7" sx={{ my: 3,  color: 'gray'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tempora perferendis minus delectus fugiat iure voluptatibus quibusdam consectetur nesciunt corporis hic, aspernatur corrupti vitae nobis molestiae deleniti, dolor recusandae provident!
          </Typography>
          <br /><br />
          <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Get Appointment</Button>
          </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{width: '350px'}} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;