import React from "react";
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';

const Listing = (props) => {
    let { id } = useParams();
    let currentListing = props.listings.find(listing => listing.id === Number(id));
    console.log('Current Listing', currentListing);

    return (
        <Container maxWidth="md" sx={{ my: '3rem' }}>
            <h1>{currentListing.name}</h1>
            <p><strong>{currentListing.address}</strong></p>
            <p><strong>{currentListing.hours}</strong></p>
            <p>{currentListing.description}</p>
        </Container >
    );
}

export default Listing;