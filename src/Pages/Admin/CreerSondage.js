import React,{useEffect, useState} from "react";
import NewRow from "../../Components/Admin/NewRow";
import DataRow from "../../Components/Admin/DataRow";

const CreerSondage = ()=>{
    const [titre, setTitre] = useState("")
    const [theme, setTheme] = useState("")
    const [type, setType] = useState("")
    const [disable,setDisable] = useState(false)
    const [show,setShow] = useState(false)
    const [intitule,setIntitule] = useState("")
    const [choix1,setChoix1] = useState("")
    const [choix2,setChoix2] = useState("")
    const [choix3,setChoix3] = useState("")
    const [choix4,setChoix4] = useState("")
    const [themes, setThemes] = useState([])

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(titre==""){
          alert("Veuillez remplir le titre du sondage")
          return}
        setDisable(true)
        setShow(true)
        
        if(type===""){
          setType("choix multiple")
        }

        if(!theme===""){
          setType("Theme 1")
        }

    }

    useEffect(() => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("http://127.0.0.1:5000/api/getThemes", requestOptions)
        .then((response) => response.text())
        .then((result)=>console.log(result))
        .catch((error) => console.log("error", error));
    }, []);

    const renderedThemes = themes.map((theme)=>{
      return <option value={theme.nom}>{theme.nom}</option>
    })

    



    return (
      <div>
        <h1>Créer un sondage</h1>
        <div className="mb-3">
          <label htmlFor="titre">Titre du Sondage</label>
          <input
            disabled={disable}
            type="text"
            placeholder="Ecrire votre titre de sondage"
            className="form-control"
            name="titre"
            onChange={(e) => setTitre(e.target.value)}
            value={titre}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="thème">Thème</label>
          <select
            disabled={disable}
            defaultValue="Thème 1"
            onChange={(e) => {
              setTheme(e.target.value);
            }}
            name="thème"
            className="form-select"
            aria-label="Default select example"
            value={theme}
          >
            {renderedThemes}
          </select>
        </div>
        
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          {disable ? null : (
            <button
              onClick={(e) => handleSubmit(e)}
              className="btn btn-warning me-md-2"
              type="button"
            >
              Valider
            </button>
          )}
        </div>
        {show ? (
          <div>
            <h3>Questions</h3>
            <div class="card card-padding">
              <div class="card-body">
                <div class="row">
                  <div className="mb-3">
                    <label htmlFor="titre">Intitulé de question</label>
                    <input
                      type="text"
                      placeholder="Ecrire votre intitulé de question"
                      className="form-control"
                      name="thème"
                      onChange={(e) => setTitre(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="type">Type de reponse</label>
                    <select
                      onChange={(e) => setType(e.target.value)}
                      defaultValue="choix multiple"
                      name="type"
                      className="form-select"
                      aria-label="Default select example"
                      value={type}
                    >
                      <option value="choix multiple">A choix multiple</option>
                      <option value="choix unique">A choix unique</option>
                      <option value="ouverte">Ouverte</option>
                      <option value="oui_non">Oui/Non</option>
                    </select>
                  </div>
                  {type === "choix multiple" || type === "choix unique" ? (
                    <div>
                      <div className="mb-3">
                        <label htmlFor="choix1">Choix 1</label>
                        <input
                          type="text"
                          placeholder="Ecrire votre intitulé de choix 1"
                          className="form-control"
                          name="choix1"
                          onChange={(e) => setTitre(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="titre">Choix 2</label>
                        <input
                          type="text"
                          placeholder="Ecrire votre intitulé de choix 2"
                          className="form-control"
                          name="thème"
                          onChange={(e) => setTitre(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="titre">Choix 3</label>
                        <input
                          type="text"
                          placeholder="Ecrire votre intitulé de choix 3"
                          className="form-control"
                          name="thème"
                          onChange={(e) => setTitre(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="titre">Choix 4</label>
                        <input
                          type="text"
                          placeholder="Ecrire votre intitulé de choix 4"
                          className="form-control"
                          name="thème"
                          onChange={(e) => setTitre(e.target.value)}
                        />
                      </div>
                    </div>
                  ) : null}

                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                      onClick={(e) => handleSubmit(e)}
                      className="btn btn-light me-md-2"
                      type="button"
                    >
                      Précé.
                    </button>
                    <input name="nbquestion" id="nbquestion" type="hidden" value ="1"></input>
                    <button
                      onClick={(e) => handleSubmit(e)}
                      className="btn btn-warning me-md-2"
                      type="button"
                    >
                      Suivant
                    </button>
                  </div>
                  <div class="d-grid gap-2 d-md-block text-center">
                    <button
                      onClick={(e) => {
                        setDisable(false);
                        setShow(false);
                      }}
                      class="btn btn-danger btn-lg"
                      style={{ "margin-right": "10px" }}
                      type="button"
                    >
                      Annuler
                    </button>
                    <button onClick={(e)=>console.log(type)} class="btn btn-primary btn-lg inscr" type="button">
                      Valider
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
}

export default CreerSondage;