import React from "react";

const infos = ({titre,data,index}) => {
    return (
        <div>
           <div className="hash">
                      <span className="titre">{titre}</span>
                      <span className="util1">{data}</span>
                    </div>
                    <hr style={{"width":"90%"}}/>
        </div>
    );

}
export default infos;