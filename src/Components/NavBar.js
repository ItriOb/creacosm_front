import React from "react";
import { Link , useNavigate} from "react-router-dom";
import {ReactSession} from 'react-client-session';


const NavBar = () => {
  const navigate = useNavigate()
    return (
      <div className="shadow">
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-dark">
          <div className="container">
            <Link to="/">
              {" "}
              <span class="navbar-brand">
                <img id="logo" src="/images/CreaCosmLogo.png" alt="creacosm" />
              </span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sondage">
                    Sondages
                  </Link>
                </li>
                {ReactSession.get('role')==="ROLE_ADMIN"?<li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Admin
                  </Link>
                </li>:null}
                
              </ul>
              {ReactSession.get("user") ? (
                <form className="d-flex">
                  <Link to="/profile">
                    <img
                      className="navbarIcon"
                      src="/images/user.png"
                      alt="user"
                    />
                  </Link>
                  <button
                  style={{"margin-left": "10px"}}
                    onClick={(e) => {
                      e.preventDefault();
                      ReactSession.set("user", null);
                      ReactSession.set("role", null);
                      navigate("/");
                    }}
                    type="button"
                    class="btn btn-danger"
                  >
                    Déconnexion
                  </button>
                </form>
              ) : (
                <form className="d-flex">
                  <Link to="/connexion">
                    <button type="button" class="conn btn btn-outline-primary">
                      Connexion
                    </button>
                  </Link>
                  <Link to="/inscription">
                    <button
                      type="button"
                      id="inscription"
                      class="inscr btn btn-primary"
                    >
                      Inscription
                    </button>
                  </Link>
                </form>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
    }

export default NavBar;