import React from "react";
import "./App.css";
import Navigation from "./containers/Navigation";
import Router from './Router';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;
