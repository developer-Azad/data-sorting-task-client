import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Appointments = ({date}) => {
    const [appointments, setAppointments] = useState([]);
    
    useEffect(() => {
        const url = `https://gentle-tor-92239.herokuapp.com/appointmen`;
        fetch(url)
        .then(res => res.json())
        .then(data => setAppointments(data));
    }, [])

    return (
        <div>
        <h2>Appointments : {appointments.length}</h2>
        <TableContainer component={Paper}>
      <Table sx={{}} aria-label="appointments table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Mobile</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Product Id</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Delivery Date</TableCell>
            <TableCell align="right">Order Status</TableCell>
            <TableCell align="right">Source of Order</TableCell>
            <TableCell align="right">Purchase date</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.productName}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.productName}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
               <TableCell align="right">{row.price}</TableCell>
               <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appointments;