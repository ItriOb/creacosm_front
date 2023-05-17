import React from "react";




const DataRow = ({sondage,sondeurs,date}) => {
    return (
      <div className="row rowStyle1">
        <div className="col-6">
          <h2
            className="titSond1 card-category"
            style={{ "font-size": "20px", "margin-left": "15px" }}
           
          >
            {sondage}
          </h2>
        </div>
        <div className="col-3">
          <h2
            className="titSond1 card-category"
            style={{ "font-size": "20px", "margin-left": "15px" }}
            
          >
            {sondeurs}
          </h2>
        </div>
        <div className="col-3">
          <h2
            className="titSond1 card-category"
            style={{ "font-size": "20px", "margin-left": "15px" }}
          >
            {date}
          </h2>
        </div>
      </div>
    );
}

export default DataRow;