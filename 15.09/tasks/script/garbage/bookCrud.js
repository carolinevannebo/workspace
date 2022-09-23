const KEY_BOOK = [];

function getValue(key) {
    return localStorage.getItem(key);
}
const getAll = (array) => array.map( book => { 
    return {...book} 
}); // Spread operator - sprer objektene inn i et nytt array

function setValue(key, value) {
    localStorage.setItem(key, value);
}
function deleteKey(key) {
    localStorage.removeItem(key)
}