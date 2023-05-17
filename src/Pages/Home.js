import React ,{useEffect,useState} from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { ReactSession } from "react-client-session";
import { Link } from "react-router-dom";

const Home = () => {

  const [session,setSession] = useState(ReactSession.get("user"));
  const [path,setPath] = useState("");




    useEffect(() => {
        document.title = "Accueil";
        if(ReactSession.get("user")!=null){
          setPath("/sondage")
          console.log(path)
        }else{
          setPath("/inscription")
        }
    }, []);
    
    return (
      <div>
        <NavBar />
        <div className="box box1">
          <div className="container">
            <h1 className="centerText">Répondez à vos sondages préférés</h1>
            <p className="centerText">
              Sed purus eros, euismod vitae tempor a, suscipit id urna.
              Phasellus non magnaeget sem eleifend mattis. Donec sed posuere
              nunc
            </p>
            <div class="row">
              <div   class="col text-center">
                <Link to={path}>
                <button 
                  type="button"
                  class="btn btn-warning center text-center try"
                >
                  Try it{" "}
                  <img
                    className="right-arrow"
                    src="/images/right-arrow.png"
                    alt="right-arrow"
                  />{" "}
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box1">
          <div className="container">
            <h1 className="centerText1">Aliquam eget nisi lobortis</h1>
            <p className="centerText1">
              Curabitur vitae congue tellus. Ut porttitor urna at nisi
              vestibulum imperdiet in at turpis. Morbi condimentum, sapien vel
              sagittis molestie, urna felis dignissim augue
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
    }

export default Home;