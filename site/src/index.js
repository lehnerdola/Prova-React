import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Cadastro from './pages/minanamo';
import Common from './Common';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/'  element={<Cadastro/>}/>
    </Routes>
    </BrowserRouter>
    <Common/>
  </React.StrictMode>
); 