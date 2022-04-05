import React, { useEffect } from "react";
import { useState } from "react";
import * as JW from '../service/index'
const Home = () => {
    const [data, setData] = useState([]);
    const [response, setReponse] = useState(false);
    const [film, setFilm] = useState(false);
    const handleClick = async() => {
        var value = document.getElementById("search").value;
        setData(value)
        var responses = await JW.jwSerch(data);
        setReponse(responses.items);
        GetTitle(responses.items[0].id);
    }
    const GetTitle = async(value) =>{
      var response = await JW.jwGetTitle(value);
      setFilm(response);
      console.log(response);
    }
  return (
    <div>
      <input type="text" placeholder="Digite o nome do filme" id="search" onChange={handleClick}/>
      <button type="submit" onClick={handleClick}>Buscar</button>
      <div>
        <h1>{
          response?
          response.map(item => {
            
            return(
              <div>
                <h1>{item.title}</h1>

              </div>
            )
          }) : null
        }</h1>
      </div>
    </div>
  );
};

export default Home;
