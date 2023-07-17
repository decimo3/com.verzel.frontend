import React from "react";
import axios from "axios";
import Banner from "./Banner";
import List from "./List";
export default function Inicio(){
  var elements = [];
  axios.get("http://localhost:4000/Home/", {withCredentials: false})
    .then((response)=>{
      console.log(response);
      for(let i=0;i<5;i++) {
        elements.push(<List key={i} />);
      }
    })
    .catch((error)=> {
      console.log(error);
    });

  if(!elements){
    return (
      <div>
        <h1>
          Erro na internet!
        </h1>
        <p>
          Por algum motivo a requisição não pode ser concluída.
        </p>
      </div>
      );
  } 

  return (
    <div className="container pb-3">
      <Banner />
      {elements}
    </div>
  );
}