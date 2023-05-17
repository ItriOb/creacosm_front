import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import MonCompte from './Pages/MonCompte';
import Inscription from './Pages/Inscription';
import Connexion from './Pages/Connexion';
import SondagesUtilisateurs from './Pages/SondagesUtilisateurs';
import Test from './Pages/Test';
import Questions from './Pages/Questions';
import Layout from './Pages/Admin/Layout';
import Test2 from './Pages/Test2';
import {BrowserRouter} from 'react-router-dom'; 
import App from './App';
import {ReactSession} from 'react-client-session';
import Chart from './Pages/Admin/Chart/Chart';
import Spinner from './Components/Spinner';

ReactSession.setStoreType("localStorage");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);