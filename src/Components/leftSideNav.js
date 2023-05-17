import React from "react";

const LeftSideNav = ({text,path}) => {
    return(<div >
        <div className="ensemble">
                  <img
                    className=""
                    id="logoSideBar"
                    src={path}
                    alt="home"
                    style={{"width":"20px","height":"20px","margin-right":"20px"}}
                  />
                  <h4 className="centerText side">{text}</h4>
        </div>
    </div>);
}

export default LeftSideNav;