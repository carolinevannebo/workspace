const KEY_TXT="txt";
const KEY_BG="bg";
function getValue(key) {
    return localStorage.getItem(key);
}
function setValue(key, value) {
    localStorage.setItem(key,value);
}
function deleteKey(key) {
    localStorage.removeItem(key)
}