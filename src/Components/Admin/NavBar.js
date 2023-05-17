import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <div className="shadow">
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-dark">
          <Link to="/admin/" class="navbar-brand logoAdmin">
            <img id="logo" src="/images/CreaCosmLogo.png" alt="creacosm" />
          </Link>
          <div className="container">
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <div className="d-flex">
                <div className="column">
                  <Link to="/profile">
                    <img
                      className="navbarIcon"
                      src="/images/user.png"
                      alt="user"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default NavBar