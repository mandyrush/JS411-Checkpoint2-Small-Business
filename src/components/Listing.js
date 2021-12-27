import React from "react";
import { useParams } from 'react-router-dom';

import Map from './Map';

import styles from './Listing.module.css';

import Container from '@mui/material/Container';

const Listing = ({ listings }) => {
    let { id } = useParams();
    let currentListing = listings.find(listing => listing.id === Number(id));

    return (
        <Container maxWidth="md" sx={{ my: '3rem' }}>
            <h1>{currentListing.name}</h1>
            <p><strong>{currentListing.address}</strong></p>
            <p><strong>{currentListing.hours}</strong></p>
            <p>{currentListing.description}</p>
            <Map inputAddress={currentListing.address} />
        </Container >
    );
}

export default Listing;