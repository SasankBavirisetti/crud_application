import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import  Crud  from './Components/Crud';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>
);
