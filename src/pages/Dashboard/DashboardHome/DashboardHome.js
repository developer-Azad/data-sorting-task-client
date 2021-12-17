import { Grid } from '@mui/material';
import React from 'react';
import Appointments from '../Appointments/Appointments';
import Tabledata from '../Tabledata/Tabledata';

const DashboardHome = () => {
    // const [date, setDate] = React.useState(new Date());
    
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Appointments></Appointments>
          {/* <Tabledata></Tabledata> */}
        </Grid>
      </Grid> 
    );
};

export default DashboardHome;