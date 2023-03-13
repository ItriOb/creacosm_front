import React ,{useEffect} from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Home = () => {

    useEffect(() => {
        document.title = "Accueil";
    }, []);
    
    return (
        <div>
        <NavBar />
        <div className="box">
            <div className="container">
                <h1 className="centerText">Répondez à vos sondages préférés</h1>
                <p className="centerText">Sed purus eros, euismod vitae tempor a, suscipit id urna.
                Phasellus non magnaeget sem eleifend mattis.
                Donec sed posuere nunc</p>

            </div>
        </div>
        <Footer />
        </div>
    );
    }

export default Home;