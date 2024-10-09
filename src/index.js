import React from 'react'; //importa o REACT
import ReactDOM from 'react-dom/client'; //importa o JSX (html no JS)
import App from './App'; //importa o componente App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

