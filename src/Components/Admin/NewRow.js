import React from "react";



const NewRow = ({titre,titre2,titre3}) => {
    return (
      <div className="row rowStyle">
        <div className="col-6">
          <h2
            className="titSond card-category"
            style={{ "font-size": "20px", "margin-left": "15px" }}
           
          >
            {titre}
          </h2>
        </div>
        <div className="col-3">
          <h2
            className="titSond card-category"
            style={{ "font-size": "20px", "margin-left": "15px" }}
            
          >
            {titre2}
          </h2>
        </div>
        <div className="col-3">
          <h2
            className="titSond card-category"
            style={{ "font-size": "20px", "margin-left": "15px" }}
          >
            {titre3}
          </h2>
        </div>
      </div>
    );
}

export default NewRow;