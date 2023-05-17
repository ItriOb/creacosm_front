import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import { FaSearch } from "react-icons/fa";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import CardQuestions1 from "../Components/CardQuestions1";
import CardQuestions2 from "../Components/CardQuestions2";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";

const Questions = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [nomSondage, setNomSondage] = useState("");
  const [isLoading,setIsLoading] = useState(true);
  

  useEffect(() => {
    document.title = "Questions";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "PHPSESSID=515c26199e7b144ee262ed5b155288f5");

    var raw = JSON.stringify({
      id: id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:5000/api/getQuestions", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setQuestions(JSON.parse(result));
        setNomSondage(JSON.parse(result)[0].nomSondage);
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const renderQuestions = questions.map((question) => {
    
      return<CardQuestions1
        name="1"
        type= {question.type}
        reponses={question.reponses}
        key={question.id}
        titre={question.intitule}
      />
    
  });
  return (
    <div className="body3">
      <NavBar />

      <div className="container">
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            <div className="separate ">
            <h1>{nomSondage}</h1>
            <div className="search-container">
              <input
                type="text"
                placeholder="Rechercher un sondage"
                className="form-control search-input"
              />
            </div>
          </div>
        
          {renderQuestions}
            </div>
          )}
      </div>
      <Footer />
    </div>
  );
};
//to circle through the questions create an index that tracks the current question if index = length of questions then display the submit button if index=0 then dont display the previous button

export default Questions;
