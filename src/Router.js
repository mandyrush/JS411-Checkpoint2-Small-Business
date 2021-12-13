import React from "react";

import { Routes, Route } from 'react-router-dom';
import Listings from './components/Listings';
import Listing from './components/Listing';
import ListingCreate from './components/ListingCreate'
import Login from './components/Login';

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Listings />} />
            <Route path="/listing/:id" element={<Listing />} />
            <Route path="/listing/create" element={<ListingCreate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Listings />} />
        </Routes>
    );
};

export default Router;
