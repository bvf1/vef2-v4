import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/login/Login';
import { Events } from './components/events/Events';




function App() {

  return (
    <div className="App">
      <h1>Viðburðarsíðan!</h1>
      <nav>
        <Events></Events>
        <Login></Login>
      </nav>
      <Outlet />
    </div>


  );
}

export default App;
