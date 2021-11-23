import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <div>
            <h2>Our dorcotrs : {doctors.length}</h2>
            <Container>
            <Grid container spacing={2}>
               {
                   doctors.map(doctor => <Doctor
                   doctor={doctor}
                   >

                   </Doctor>)
               }
 
            </Grid>
            </Container>
        </div>
    );
};

export default Doctors;