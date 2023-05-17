import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
      <div
        className="contenaire d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{"width": "280px;"}}
      >
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-link link-dark sidebar-item" aria-current="page">
              
              <img className="socials adminIcons"   src="/images/dashboard.png" alt="dashboard" />
              Dashboard
              </Link>
          </li>
          <li>
          <Link to="/admin/newSondage" className="nav-link link-dark sidebar-item" >
            <img className="socials adminIcons"   src="/images/add.png" alt="add" />
              Créer un sondage
            </Link>
          </li>
          <li>
          <Link to="/admin/sondages" className="nav-link link-dark sidebar-item">
            <img className="socials adminIcons"   src="/images/bar-chart-black.png" alt="bar-chart-black" />
              Mes Sondages
              </Link>
          </li>
          <li>
            <a href="#" className="nav-link link-dark sidebar-item">
            <img className="socials adminIcons"   src="/images/color-palette.png" alt="color-palette" />
              Thèmes
            </a>
          </li>
        </ul>
      </div>
    );

}

export default SideBar;