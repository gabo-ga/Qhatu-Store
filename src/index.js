import React from 'react';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import * as bootstrap  from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import TableAdministrador from './components/TableAdministrador';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals