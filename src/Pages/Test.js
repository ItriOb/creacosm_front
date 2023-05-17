import React, { useState, useEffect } from "react";
import creacosm from "../apis/creacosm";
import axios from "axios";

// ADD THIS

const Test = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    onTermSubmit();
  }, []);

  const onTermSubmit = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "PHPSESSID=2fe771d97493a0e0cb12c2b20f4f640f");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:5000/api/show", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(JSON.parse(result)))
      .catch((error) => console.log(error));
  };
  return <div>{term}</div>;
};

export default Test;
