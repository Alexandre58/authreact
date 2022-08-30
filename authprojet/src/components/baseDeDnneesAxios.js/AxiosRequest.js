import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Ui/Card";
//axios = recherche des données et affichage des donnees avec un useEffect et .then()=setDat(res.data)
const AxiosRequest = () => {
  const [data, setData] = useState([]);
  //   const getData = () => {
  //     fetch("https://jsonplaceholder.typicode.com/todos/")
  //       .then((response) => response.json())
  //       .then((json) => console.log(json));
  //   };
  const getData = () => {
    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        console.log("=========================ficheUser>");
        console.log(res.data);
        console.log("==========================ficheUser<");
        return res;
      })
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // dans tous les cas
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="axiosRequest_h1">axios</h1>
      <section className="axiosRequest_section_container">
        {data?.slice(0, 4).map((listeJsons, index) => (
          <Card key={index} listeJsons={listeJsons} />
        ))}
      </section>
    </>
  );
};

export default AxiosRequest;
