import React from 'react';

const RadioButton=({name,reponse})=>{
    return (
      <div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name={name}
            value={reponse}
            
          />
          <label class="form-check-label" for="flexCheckDefault">
            {reponse}
          </label>
        </div>
      </div>
    );
}

export default RadioButton;