import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/login/Login';
import { Events } from './components/events/Events';
import Layout from './components/layout/Layout';




function App() {
  const [isLoggedIn, setLoginState] = useState(false);
  useEffect(() => {
  }, [isLoggedIn])

  return (
    <div className="App">
      <Layout>
        <Outlet context={isLoggedIn} />  
        <Login setLoginState={setLoginState} isLoggedIn={isLoggedIn}></Login>
      </Layout>
    </div>


  );
}

export default App;
