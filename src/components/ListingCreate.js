import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ListingCreate = ({ listings, addBusiness }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [hours, setHours] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const handleClick = () => {
        let lastListingId = listings[listings.length - 1].id;
        let newListingId = Number(lastListingId + 1);

        addBusiness({
            id: newListingId,
            name: name,
            description: description,
            hours: hours,
            address: address
        })

        navigate('/');
    }

    return (
        <Container maxWidth="lg" sx={{ my: '3rem' }}>
            <Grid container spacing={8}>
                <Grid item xs={12} md={6}>
                    <form>
                        <TextField
                            fullWidth
                            hiddenLabel
                            required
                            id="name"
                            name="name"
                            label="Name"
                            variant="standard"
                            onChange={(event) => setName(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            hiddenLabel
                            id="address"
                            name="address"
                            label="Address"
                            type="text"
                            variant="standard"
                            onChange={(event) => setAddress(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            hiddenLabel
                            id="hours"
                            name="hours"
                            label="Hours (ex. 8AM - 9PM)"
                            type="text"
                            variant="standard"
                            onChange={(event) => setHours(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            hiddenLabel
                            id="description"
                            name="description"
                            label="Description"
                            type="text"
                            variant="standard"
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <Button
                            variant="contained" sx={{
                                mt: 3, width: '50%', backgroundColor: '#3E51B5', color: '#fff', '&:hover': {
                                    backgroundColor: '#CCC',
                                    color: '#000'
                                }
                            }}
                            onClick={handleClick} >
                            Save
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    map
                </Grid>
            </Grid>
        </Container>
    );
}

export default ListingCreate;