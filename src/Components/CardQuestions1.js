import React from "react";
import ImageCarousel from "./ImageCarousel";
import RadioButton from "./RadioButton";
import CheckBox from "./CheckBox"


function handleDisplay (t,name,reponse){
  if(t==="oui_non"){
  return <RadioButton name={name} reponse={reponse}/>;
}else if(t==="unique"){
  return <RadioButton name={name} reponse={reponse}/>;
}else if(t==="multiple"){
return <CheckBox name={name} reponse={reponse}/>
}else if(t==="ouverte"){
  return false;
}


}

const CardQuestions1 = ({titre,name,reponses,type}) => {
  
  const renderedReponses = reponses.map((reponse) => {
    return (handleDisplay(type, name, reponse))?<div class=" form-check">{handleDisplay(type, name, reponse)}</div>:false;
  });

  return (
    <div className="card crd">
      <div className="card-body">
        <h3 style={{ "margin-bottom": "30px" }} className="card-title">
          {titre}
        </h3>
        <ImageCarousel />
        <div className="radio-button"></div>
        {renderedReponses ? (
          renderedReponses
        ) : (
          <div class="input-group flex-nowrap">
            <input
              type="text"
              id="ecrireRep"
              class="form-control"
              placeholder="Ecrire une réponse"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
        )}

        <div style={{ "margin-top": "30px" }}></div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-light me-md-2" type="button">
            Précédent
          </button>
          <button class="btn btn-primary" type="button">
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardQuestions1;