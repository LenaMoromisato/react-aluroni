import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import Cardapio from './pages/Cardapio';
import Inicio from 'pages/Inicio';

const componenteAtual = window.location.pathname === '/' ? <Inicio /> : <Cardapio />;

ReactDOM.render(
  <React.StrictMode>
    {componenteAtual}
  </React.StrictMode>,
  document.getElementById('root')
);
