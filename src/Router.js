import React from "react";
import cookie from "cookie";

import { Routes, Route, Navigate } from 'react-router-dom';
import Listings from './containers/Listings';
import Listing from './containers/Listing';
import ListingCreate from './containers/ListingCreate'
import Login from './components/Login';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies['isLoggedIn'] ? true : false;
};

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             render={(props) => checkAuth()
//                 ? <Component {...props} />
//                 : <Navigate to="/login" />}
//         />
//     )
// }

const ProtectedRoute = ({ children }) => {
    return checkAuth() ? children : <Navigate to="/login" />;
}

const Router = ({
    isLoggedIn,
    setIsLoggedIn,
    username,
    setUsername
}) => {
    return (
        <Routes>
            <Route exact path="/" element={<Listings
                isLoggedIn={isLoggedIn} />}
            />
            <Route path="/listing/:id" element={<Listing />} />
            <Route
                exact
                path="/listing/create"
                element={
                    <ProtectedRoute>
                        <ListingCreate />
                    </ProtectedRoute>
                } />
            <Route path="/login" element={<Login
                setIsLoggedIn={setIsLoggedIn}
                username={username}
                setUsername={setUsername} />}
            />
            <Route path="/logout" element={<Listings />} />
        </Routes>
    );
};

export default Router;
