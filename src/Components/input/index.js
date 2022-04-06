import React, { useEffect } from "react";
import { useState } from "react";
import Loader from "react-loaders";
import * as JW from '../../service/index'
import Responses from "../responses";
import * as S from './styles'

const Input = () => {
    const [data, setData] = useState([]); // Dados digitados no INPUT
    const [response, setReponse] = useState(false); // Resposta da API JW com os valores passados 

    const handleClick = async() => {
        var value = document.getElementById("search").value; // Valor digitado no INPUT
        setData(value); // Seta o valor digitado no INPUT
        var responses = await JW.jwSerch(data); // Resposta da API JW com os valores passados
        setReponse(responses.items); // Seta a resposta da API JW com os valores passados
        GetTitle(responses.items[0].id); // Chama a função que busca o título da API JW passando o Id do Filme
    }

    const GetTitle = async(value) =>{
      var response = await JW.jwGetTitle(value); // Resposta da API JW com os valores passados
      console.log(response);// ESSA FUNÇÃO AINDA NÃO ESTÁ FUNCIONANDO
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
