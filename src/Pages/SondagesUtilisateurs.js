import React, {useEffect,useState} from 'react';
import NavBar from '../Components/NavBar';
import {FaSearch} from 'react-icons/fa';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import {Link, useNavigate} from 'react-router-dom';
import Loader from '../Components/Loader';
import Spinner from '../Components/Spinner';

const SondagesUtilisateurs = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
    const [sondages,setSondages] = useState([]);
    useEffect(() => {
        document.title = "Sondages";
        var myHeaders = new Headers();
myHeaders.append("Cookie", "PHPSESSID=515c26199e7b144ee262ed5b155288f5");

var raw = "";

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("http://127.0.0.1:5000/api/getSondages", requestOptions)
  .then((response) => response.text())
  .then((result) => {setSondages(JSON.parse(result))})
  .catch((error) => console.log("error", error));




    }, []);
    useEffect(() => {
        var myHeaders = new Headers();
myHeaders.append("Cookie", "PHPSESSID=515c26199e7b144ee262ed5b155288f5");

var raw = "";

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("http://127.0.0.1:5000/api/getSondages", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    setIsLoading(false)
    setSondages(JSON.parse(result))})
  .catch((error) => console.log("error", error));
    }, [sondages]);

    const renderSondages = sondages.map((sondage) => {
            return <Card path={`/questions/${sondage.id}`} titre={sondage.nom} />
        })
    return(<div className='body3'>
        <NavBar/>
        <div className="container">
            <div className='separate '>
                <h1>Sondages Suggérés</h1>
            </div>
            {isLoading?<Spinner/>:renderSondages}
        </div>
        <Footer/>
    </div>)
};

export default SondagesUtilisateurs;