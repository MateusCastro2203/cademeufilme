import React, { useEffect } from "react";
import { useState } from "react";
import Loader from "react-loaders";
import * as JW from '../../service/index'
import Responses from "../responses";
import * as S from './styles'

const Input = () => {
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
    <S.Container>
      <input type="text" placeholder="Digite o nome do filme" id="search" onChange={handleClick}/>
      <button type="submit" onClick={handleClick}>Buscar</button>
        {
          response?
          response.slice(0,5).map(item => {
            return(
             <Responses data={item}/>
            )
          }) : null
        }
    </S.Container>
  );
};

export default Input;
