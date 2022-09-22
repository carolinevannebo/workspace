const KEY_NAME="name";
const KEY_FOOD="food";
function getValue(key) {
    return localStorage.getItem(key);
}
function setValue(key, value) {
    localStorage.setItem(key,value);
}
function deleteKey(key) {
    localStorage.removeItem(key)
}