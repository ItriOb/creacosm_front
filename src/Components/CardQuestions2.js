import React from "react";
import ImageCarousel from "./ImageCarousel";
import RadioButton from "./RadioButton";

const CardQuestions2 = ({titre}) => {
    return (
      <div className="card crd">
        <div className="card-body">
          <h5 className="card-title">{titre}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            auctor, nisl eget
            <br /> ultricies tincidunt, nunc nisl aliquet nunc, eget aliquet
            nisl nisl sit amet nisl.
            <br /> Donec auctor, nisl eget ultricies tincidunt, nunc nisl
            aliquet nunc, eget aliquet nisl nisl sit amet nisl.
          </p>
          <ImageCarousel />
          <div className="radio-button"></div>
          <h3 style={{"font-size" : "20px"}}>Votre Réponse : </h3>
          <div class="input-group flex-nowrap">
  <input type="text" id="ecrireRep" class="form-control" placeholder="Ecrire une réponse" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
          <div style={{"margin-top":"30px"}}>

            </div>
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

export default CardQuestions2;