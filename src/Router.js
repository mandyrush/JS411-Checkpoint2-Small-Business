import React from "react";
import cookie from "cookie";

import { Routes, Route, Navigate } from 'react-router-dom';
import Listings from './containers/Listings';
import Listing from './containers/Listing';
import ListingCreate from './containers/ListingCreate'
import Login from './containers/Login';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies['isLoggedIn'] ? true : false;
};

const ProtectedRoute = ({ children }) => {
    return checkAuth() ? children : <Navigate to="/login" />;
}

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Listings />} />
            <Route path="/listing/:id" element={<Listing />} />
            <Route
                exact
                path="/listing/create"
                element={
                    <ProtectedRoute>
                        <ListingCreate />
                    </ProtectedRoute>
                } />
            <Route path="/login" element={<Login />}
            />
            <Route path="/logout" element={<Listings />} />
        </Routes>
    );
};

export default Router;
