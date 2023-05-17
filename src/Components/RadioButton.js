import React from 'react';

const RadioButton=({name,reponse})=>{
    return (
        <div>
            <input
              class="form-check-input"
              type="radio"
              name={name}
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              {reponse}
            </label>
        </div>
        
    )
}

export default RadioButton;