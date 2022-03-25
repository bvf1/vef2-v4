import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Events } from './components/events/Events';
import { Event } from './components/event/Event';
import { LoginForm } from './components/loginform/LoginForm';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} > 
        <Route index element={<Events />} />
        <Route path="events" element={<Events />} />
        <Route path="events/:slugId" element={<Event />} />
        <Route 
            path="*"
            element={
              <main>
                <p>Það er ekkert hér </p>
              </main>
            }
          />
        <Route path="login" element={<LoginForm/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
