import React, {useState, useEffect} from "react";
import NavBar from "../Components/NavBar";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Inscription = () => {
  useEffect(() => {
    document.title = "Inscription";
}, []);

    const [selectedDate, setSelectedDate] = useState(null);
    const [genre, setGenre] = useState("");
    const [prenom,setPrenom] = useState("");
    const [nom,setNom] = useState("");
    const [ville,setVille] = useState("");
    const [password,setPassword] = useState("");
    const [login,setLogin] = useState("");
    const [error, setError] = useState(false);

    const handleDateChange = (date) => {
        const currentDate= new Date();
        const givenDate = new Date(date);
        if(givenDate > currentDate){
            alert("Date invalide");
        }else{
          setSelectedDate(date);  
        }
        
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // if(prenom === "" || nom === "" || genre === "" || selectedDate === null || ville === "" || password === ""){
        //     alert("Veuillez remplir tous les champs");
        //     return
        // }

        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "PHPSESSID=515c26199e7b144ee262ed5b155288f5");

var raw = JSON.stringify({
  "prenom": prenom,
  "nom": nom,
  "login": login,
  "genre": genre,
  "password": password,
  "ville": ville
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://127.0.0.1:5000/api/register", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => {
    setError(true)
  });




      }


    return (
      <div className="body1">
        <NavBar />
        <img className="logo1" src="/images/CreaCosmLogo.png" alt="creacosm" />
        <div className="container container1">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body centerDiv">
                  <h2 className="card-title">Inscription</h2>
                  <form className="row g-3">
                  <div className="col-md-12">
                  {error? <h3 style={{"color":"red","font-size":"15px"}}>Login déjà utilisé</h3> :null}
                      <label htmlFor="login" className="form-label">
                        Login
                      </label>
                      <input value={login} onChange={e=>setLogin(e.target.value)} type="text" className="form-control" id="login" />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="prenom" className="form-label">
                        Prénom
                      </label>
                      <input value={prenom} onChange={e=>setPrenom(e.target.value)} type="text" className="form-control" id="prenom" />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="nom" className="form-label">
                        Nom
                      </label>
                      <input value={nom} onChange={e=>setNom(e.target.value)} type="text" className="form-control" id="nom" />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="genre" className="form-label">
                        Genre
                      </label>
                      <select
                        defaultValue="Thème 1"
                        onChange={(e) => {
                          setGenre(e.target.value);
                        }}
                        name="genre"
                        className="form-select"
                        aria-label="Default select example"
                        value={genre}
                      >
                        <option value="M">Masculin</option>
                        <option value="F">Féminin</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="date" className="form-label">
                        Date de naissance
                      </label>
                      <DatePicker
                        selected={selectedDate}
                        name="date"
                        onChange={handleDateChange}
                        dateFormat="yyyy-MM-dd"
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="ville" className="form-label">
                        Ville
                      </label>
                      <input value={ville} onChange={e=>setVille(e.target.value)} type="text" className="form-control" id="ville" />
                    </div>
                    
                    <div className="col-md-12">
                      <label htmlFor="password" className="form-label">
                        Mot De Passe
                      </label>
                      <input
                      value={password} onChange={e=>setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="password"
                      />
                    </div>
                    <div className="col-12">
                      <button
                      onClick={(e)=>handleRegister(e)}
                        type="submit"
                        className="inscrire btn btn-primary"
                      >
                        Inscription
                      </button>
                    </div>
                    <div className="col-12">
                      <span>
                        Vous avez déjà un compte ? <Link to="/connexion">Se connecter</Link>
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
export default Inscription;