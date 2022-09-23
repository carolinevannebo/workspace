const KEY_TXT="txt";
const KEY_BG="bg";

function getValue(key) { // Function to get the value of a key
    return localStorage.getItem(key);
}
function setValue(key, value) { // Function to set the value of a key
    localStorage.setItem(key,value);
}
function deleteKey(key) { // Function to delete a key
    localStorage.removeItem(key)
}