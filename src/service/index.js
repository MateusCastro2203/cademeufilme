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
    jw.getTitle().then(data => {
        console.log(data);
    });
}    