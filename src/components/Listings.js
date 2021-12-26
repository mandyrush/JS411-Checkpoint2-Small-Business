import React from "react";
import { Link } from "react-router-dom";

import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Listings = ({ listings, isLoggedIn, removeBusiness }) => {
    return (
        <Container maxWidth="lg" sx={{ my: '3rem' }}>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Hours</TableCell>
                            <TableCell>Address</TableCell>
                            {isLoggedIn && <TableCell>Delete</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listings.map((listing, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link to={`/listing/${listing.id}`}>{listing.name}</Link>
                                </TableCell>
                                <TableCell>{listing.description}</TableCell>
                                <TableCell>{listing.hours}</TableCell>
                                <TableCell>{listing.address}</TableCell>
                                {isLoggedIn && <TableCell>
                                    <Button onClick={() => removeBusiness(index)}>
                                        <DeleteIcon sx={{ color: 'red' }}></DeleteIcon>
                                    </Button>
                                </TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default Listings;