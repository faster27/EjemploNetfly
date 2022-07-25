// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importaciones de Redux
// import { Provider } from 'react-redux'

import App from './components/App';

// Importar las hojas de esilos

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';

// TODO Si trabajamos con Redux, crear el store y aplicar el middleware
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
