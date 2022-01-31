import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const AddedUser = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('https://gentle-tor-92239.herokuapp.com/customers')
            .then(res => res.json())
            .then(data => setCustomers(data))
    }, [])

    const handleRemove = id => {
        const url = `https://gentle-tor-92239.herokuapp.com/customers/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('deleted product')
                    const restCustomers = customers.filter(customer => customer._id !== id);
                    setCustomers(restCustomers);
                    window.location.reload();
                }

            })
    }
    return (
            <Container>
            <Table sx={{}} aria-label="appointments table">
                <TableHead>
                    <TableRow>
                        <TableCell>username</TableCell>
                        <TableCell>Mobile</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.username}</TableCell>
                            <TableCell component="th" scope="row">{row.mobile}</TableCell>
                            <TableCell component="th" scope="row">{row.email}</TableCell>
                            <TableCell component="th" scope="row">{row.address}</TableCell>
                            <TableCell component="th" scope="row"><button style={{ color: `red` }} onClick={() => handleRemove(row._id)}>delete</button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </Container>
    );
};


export default AddedUser;