import React ,{useEffect} from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import LeftSideNav from "../Components/leftSideNav";
import Infos from "../Components/infos";
import {ReactSession} from 'react-client-session';

const MonCompte = () => {
    
  useEffect(() => {
    document.title = "Mon Compte";
  }, []);

    return (
      <div>
        <NavBar />

        <div className="container monCompte shadow">
          <div className="box box2">
            <h1 className="" style={{ color: "white", "padding-left": "30px" }}>
              Bonjour, user
            </h1>
            <p className="" style={{ color: "white", "padding-left": "30px" }}>
              Vous voulez modifier votre profil ? Retrouver un sondage auquel
              vous avez répondu ?
            </p>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <div className="black-box">
                <h3 className="centerText" style={{ "padding-top": "20px" }}>
                  Utilisateur 1
                </h3>
                <hr style={{ color: "white", height: "1px" }} />
                <div className="ensemble">
                  <LeftSideNav index="0" path="/images/home.png" text="Vue d'ensemble du compte"/>
                </div>
                <hr style={{ color: "white", height: "1px" }} />
                <div className="ensemble">
                  <LeftSideNav index="1" path="/images/edit.png" text="Modifier le profil"/>
                </div>
                <hr style={{ color: "white", height: "1px" }} />
                <div className="ensemble">
                  <LeftSideNav index="2" path="/images/bar-chart.png" text="Sondages Répondus"/>
                </div>
              </div>
            </div>
            <div class="col-sm-9">
              <div>
                <h2 className="titreEns">Vue d'ensemble du compte</h2>
                  <div className="container infos">
                    
                  <Infos titre="Nom d'Utilisateur" data="utilisateur1" />
                  <Infos titre="Email" data="utilisateur1@gmail.com" />
                  <Infos titre="Date de naissance" data="15/04/2001" />
                  <Infos titre="Ville" data="Orléans" />
                    
                  </div>
                  <button type="button" class="modifier text-center btn btn-primary">Modifier le profil</button> 
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default MonCompte;