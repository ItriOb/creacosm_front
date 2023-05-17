import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import MonCompte from './Pages/MonCompte';
import Inscription from './Pages/Inscription';
import Connexion from './Pages/Connexion';
import SondagesUtilisateurs from './Pages/SondagesUtilisateurs';
import Test from './Pages/Test';
import Questions from './Pages/Questions';
import Layout from './Pages/Admin/Layout';
import Test2 from './Pages/Test2';
import Dashboard from "./Pages/Admin/Dashboard";
import CreerSondage from "./Pages/Admin/CreerSondage";
import SondagesAdmin from "./Pages/Admin/SondagesAdmin";
import NotFound from "./Pages/NotFound";

const App = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/profile" element={<MonCompte />} />
          <Route path="/questions/:id" element={<Questions />} />
          <Route path="/sondage" element={<SondagesUtilisateurs />} />
          <Route path="/admin" element={<Layout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/" element={<Dashboard />} />
            <Route path="/admin/newSondage" element={<CreerSondage />} />
            <Route path="/admin/sondages" element={<SondagesAdmin />} />
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    );
    }

export default App;