const KEY_TITLE = "title";
const KEY_AUTHOR = "author";
function getValue(key) {
    return localStorage.getItem(key);
}
function setValue(key, value) {
    localStorage.setItem(key,value);
}
function deleteKey(key) {
    localStorage.removeItem(key)
}