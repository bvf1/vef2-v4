import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Events } from './components/events/Events';
import { Event } from './components/event/Event';
import { render } from 'react-dom';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/"> 
        <Route path="events" element={<App /> } />
        <Route path="/events/:eventSlug" element={<Event />}/>
      </Route>
      <Route 
          path="*"
          element={
            <main>
              <p>Það er ekkert hér </p>
            </main>
          }
        />
        
    </Routes>
  </BrowserRouter>,
  rootElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
