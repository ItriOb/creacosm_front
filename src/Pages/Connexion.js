import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { redirect, Link, useNavigate } from "react-router-dom";
import {ReactSession} from "react-client-session";
import axios from "axios";

const Connexion = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = "Connexion";
    if(ReactSession.get("user")){
      navigate("/");
    }
  }, []);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    setError(false)
    e.preventDefault();
    if(login === "" || password === ""){
      setError(true)
      return
    }

    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "PHPSESSID=2fe771d97493a0e0cb12c2b20f4f640f");

    var raw = JSON.stringify({
      login: login,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:5000/api/login", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const resultData = JSON.parse(result);
        if(resultData.status=="error"){
        setError(true)
        return
      }
      ReactSession.set("user",resultData.id)
      ReactSession.set("role",resultData.role)
        return navigate("/")}
        )
      .catch((error) => console.log("error", error));

  };

  return (
    <div className="body2">
      <NavBar />
      <img className="logo1" src="/images/CreaCosmLogo.png" alt="creacosm" />
      <div className="container ">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body centerDiv">
                <h2 className="card-title">Connexion</h2>
                <form className="row g-3">
                  <div className="col-md-12">
                    {error? <h3 style={{"color":"red","font-size":"15px"}}>Username or password</h3> :null}
                    
                    <label htmlFor="email" className="form-label">
                      Login
                    </label>
                    <input
                      onChange={(e) => {
                        setLogin(e.target.value);
                      }}
                      value={login}
                      type="text"
                      className="form-control"
                      id="email"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="password" className="form-label">
                      Mot De Passe
                    </label>
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="col-12">
                    <span>
                      <a href="#">Mot de passe oublié ?</a>
                    </span>
                  </div>
                  <div className="col-12">
                    <button
                      onClick={(e) => handleLogin(e)}
                      type="submit"
                      className="inscrire btn btn-primary"
                    >
                      Connexion
                    </button>
                  </div>
                  <div className="col-12">
                    <span>
                      Vous n'avez pas de compte ? <Link to="/inscription"><a href="#">S'inscrire</a></Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Connexion;
