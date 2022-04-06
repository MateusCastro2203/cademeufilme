const JustwatchAPI = require('justwatch-api'); // Seto a API do JustWatch
const options = { // Seto as opções da API
    locale:'pt_BR',
}

const jw = new JustwatchAPI([options]); // Instancio a API do JustWatch

export const jwSerch = (value) => { //  Função para buscar o filme no JustWatch
    console.log('oi',value);
    return jw.search(value)
};
export const jwGetTitle = (value) => {
    console.log('teste',value);
   return jw.getTitle('movie', value)
    
}    