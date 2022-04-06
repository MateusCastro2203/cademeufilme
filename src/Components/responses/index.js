import React from 'react'
import * as S from './styles'
const Responses = (data) => {
  var valueReplace = "{profile}"
  var NewValue = data.data.poster.replace(valueReplace, "");
  console.log('VALOR',data);
  return (
    <S.Container>
      <S.Title>{data.data.title}</S.Title>
      <img src={`https://images.justwatch.com${NewValue}s166/`} alt='imagem'/>
      
    </S.Container>
  )
}

export default Responses