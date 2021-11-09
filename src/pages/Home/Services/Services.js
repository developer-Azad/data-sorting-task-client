
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';


const services = [
  {
    name: 'Fluoride Treatment',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    img: fluoride
  },
  {
    name: 'Cavity Filling',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    img: cavity
  },
  {
    name: 'Teeth Whitening',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    img: whitening
  },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
          OUR SERVICES
        </Typography>
          <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
          Services we provided
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          services.map(service => <Service
          key={service.name}
          service={service}
          ></Service>)
        }
      </Grid>
    </Box>
    );
};

export default Services;