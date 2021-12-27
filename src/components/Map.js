import React from 'react';
import { useState, useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader"
import Geocode from "react-geocode";

import styles from './Map.module.css';

const Map = ({ inputAddress }) => {
    const [latitude, setLatitude] = useState(45.787636);
    const [longitude, setLongitude] = useState(-108.489304);
    const [zoom, setZoom] = useState(13);

    const findAddress = () => {
        if (inputAddress) {
            Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

            Geocode.fromAddress(inputAddress).then(
                (response) => {
                    const { lat, lng } = response.results[0].geometry.location;
                    setLatitude(lat);
                    setLongitude(lng);
                    setZoom(18);
                },
                (error) => {
                    console.error(error);
                }
            );
        } else {
            // Default coordinates for Billings, MT
            setLatitude(45.787636);
            setLongitude(-108.489304);
            setZoom(13);
        }
    }

    const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        version: "weekly"
    });

    const mapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: zoom,
    }

    loader.load().then((google) => {
        const map = new google.maps.Map(document.getElementById("map"), mapOptions);

        // Create a marker for current address
        const marker = new google.maps.Marker({
            position: mapOptions.center,
            map: map,
        });
    })
        .catch(e => console.log('Error: ', e));

    useEffect(() => {
        findAddress();
    }, [inputAddress])

    return (
        <div>
            <div id="map" className={styles.mapStyles}></div>
        </div>
    )
}

export default Map;