import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/orders`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted');
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            });
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{}} aria-label="Orders table">
                <TableHead>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell align="right">Product</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((row) => (
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.email}
                            </TableCell>
                            <TableCell align="right">{row.product}</TableCell>
                            <TableCell align="right">{row.cost}</TableCell>
                            <TableCell align="right">{
                                <button onClick={() => handleDelete(row._id)}>Cancel Booking</button>
                            }</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageAllOrders;