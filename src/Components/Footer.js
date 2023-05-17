import React from "react";

const Footer = () => {
    return (
        
        <footer class="footer border-dark footer"> 
        <div class="container">
        <div class="row">
        <div class="col-md-3">
        <img id="logo" src="/images/CreaCosmLogo.png" alt="creacosm" />
        <p>Créacosm Copyright © 1999-2023</p>
        </div>
        <div class="col-md-3">
        </div>
        <div class="col-md-3">
        </div>
        <div class="col-md-3">
        <img className="socials" src="/images/twitter.png" alt="twitter" />
        <img className="socials"  src="/images/facebook.png" alt="facebook" />
        <img className="socials"  src="/images/instagram.png" alt="instagram" />


        </div>
        </div>
        </div>
        </footer>
    );
};

export default Footer;