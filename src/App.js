import React from "react";
import { useState } from 'react';
import cookie from "cookie";
import "./App.css";
import Navigation from "./components/Navigation";
import Router from './Router';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const cookies = cookie.parse(document.cookie);

  const [isLoggedIn, setIsLoggedIn] = useState(cookies['isLoggedIn']);
  const [username, setUsername] = useState(cookies['username']);

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navigation
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            username={username}
            setUsername={setUsername}
          />
          <Router
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            username={username}
            setUsername={setUsername}
          />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;
