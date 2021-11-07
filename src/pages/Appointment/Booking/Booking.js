import { Grid } from '@material-ui/core';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date}) => {
    const {name, time, space} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
        <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{py:5}}>
            <Typography sx={{ color: 'info.main' , fontWeight: 600}} variant="h5" gutterBottom component="div">
                {name}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {space} SPACE AVAILABLE
            </Typography>
            <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
            </Paper>
        </Grid>
        <BookingModal
        date={date}
        booking={booking}
        handleBookingClose= {handleBookingClose}
        openBooking={openBooking}
        ></BookingModal>
        </>
    );
};

export default Booking;