// src/main.jsx

// ¡IMPORTANTE! Se necesita importar React aquí para que React.StrictMode
// y el JSX sean reconocidos correctamente por ReactDOM.createRoot.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Asegúrate de que esta ruta sea correcta
import './index.css'; // Si tienes estilos

// Busca el elemento HTML con id 'root' donde se montará la aplicación React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente principal <App /> dentro de React.StrictMode
// React.StrictMode es una herramienta para destacar problemas potenciales en la aplicación.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
