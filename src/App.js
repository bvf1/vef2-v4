import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/login/Login';
import { Events } from './components/events/Events';




function App() {
  const [isLoggedIn, setLoginState] = useState(false);
  useEffect(() => {
  }, [isLoggedIn])

  return (
    <div className="App">
      <header>
        ToDo
      </header>
      <h1>Viðburðarsíðan!</h1>
      <Outlet context={isLoggedIn} />  
      <nav>
        <Login setLoginState={setLoginState} isLoggedIn={isLoggedIn}></Login>
      </nav>
    </div>


  );
}

export default App;
