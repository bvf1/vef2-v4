import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { Event } from './components/event/Event';
import { Events } from './components/events/Events';
import { Login } from './components/login/Login';

function App() {
  const [loggedin, setLoggedin] = useState(false);
  const [events, setData] = useState(0);

  useEffect(() => {
    console.log('loaded');
    async function fetchData() {
      await fetch('https://vef2-20222-v3-synilausn.herokuapp.com/events')
        .then((res) => res.json())
        .then((json) => json.items)
        .then((items) => {
          setData(items)
        })
    }
    
    fetchData();
  }, [])
  console.log("events", events);

  return (
    <div className="App">
      <h2>Viðburðarsíðan!</h2>
      {events !== 0 && (
            <Events events={events}>
            </Events>
      )}
      

      
      <Login>
      </Login>
      <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
