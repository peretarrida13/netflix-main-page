import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FilmsProvider } from './fetching/FilmFetching';

ReactDOM.render(
  <React.StrictMode>
    <FilmsProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </FilmsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
