const Justwatch = require('justwatch-api');
const options = {
    locale:'pt_BR',
}
const jw = new Justwatch([options]);

export const jwSerch = (value) => {
    console.log('oi',value);
    return jw.search(value)
};
export const jwGetTitle = (value) => {
    console.log('teste',value);
   return jw.getTitle('movie', value)
    
}    