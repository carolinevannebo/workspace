const KEY_NAME = "name"; // lær deg å ta i bruk namespace, så slipper du å ha så mange funksjoner som heter det samme i forskjellige filer
const KEY_FOOD = "food";
function getValue(key) {
    return localStorage.getItem(key);
}
function setValue(key, value) {
    localStorage.setItem(key,value);
}
function deleteKey(key) {
    localStorage.removeItem(key)
}