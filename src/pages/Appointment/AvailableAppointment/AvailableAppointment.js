import { Container, Grid, Typography } from '@material-ui/core';
import { Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
            {
                id: 1,
                name: 'Teeth Orthodontics',
                time: '08.00 AM - 09.00 AM',
                price: 100,
                space: 10,
            },
            {
                id: 2,
                name: 'Cosmetic Dentistry',
                time: '10.05 AM - 11.30 AM',
                price: 150,
                space: 10,
            },
            {
                id: 3,
                name: 'Teeth Cleaning',
                time: '05.00 PM - 06.30 PM',
                price: 200,
                space: 10,
            },
            {
                id: 4,
                name: 'Cavity Protection',
                time: '07.00 M - 08.30 AM',
                price: 110,
                space: 10,
            },
            {
                id: 5,
                name: 'Eye care',
                time: '08.00 AM - 09.00 AM',
                price: 130,
                space: 10,
            },
            {
                id: 6,
                name: 'Orthopedics',
                time: '12.00 PM - 1.00 PM',
                price: 250,
                space: 10,
            },
        ]

const AvailableAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'secondary.main' , fontWeight: 600}}>Available Appointment : 
            {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked successfully!</Alert>}
            <Grid container spacing={2}>
               {
                   bookings.map(booking => <Booking
                   key={booking.id}
                   booking={booking}
                   date={date}
                   setBookingSuccess = {setBookingSuccess}
                   ></Booking>)
               }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;