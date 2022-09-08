import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp';
import { HashRouter } from 'react-router-dom';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <HashRouter>
         <HeroesApp />
      </HashRouter>
      {/* <BrowserRouter> */}

      {/* </BrowserRouter> */}
   </React.StrictMode>
);
