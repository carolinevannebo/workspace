const BODY = "body";
const USER_FORM = "#user-form";
const INPUT_TITLE = "#input-title";
const INPUT_AUTHOR = "#input-author";
const SAVE_BTN = "#save-btn";
const DELETE_BTN = "#delete-btn";
const OUTPUT_DIV = "#output-div";

const KEY_BOOK = [];
const books = JSON.parse(getValue(KEY_BOOK));

function queryElement(selector) {
    return document.querySelector(selector);
}

function getValue(key) {
    return localStorage.getItem(key);
}
const getAll = () => books.map( book => { 
    return {...book} 
}); // Spread operator - sprer objektene inn i et nytt array

function setValue(key, value) {
    localStorage.setItem(key, value);
}
function deleteKey(key) {
    localStorage.removeItem(key)
}

/*function onPageLoad() { // is called from body onLoad
    const book = getValue(KEY_BOOK);
    
    if(!book) {
        queryElement(OUTPUT_DIV).innerHTML = "Local Storage er tom.";
    } else {
        queryElement(OUTPUT_DIV).innerHTML = `Local Storage inneholder: ${book.title} av ${book.author}.`;
    }
}*/

function saveForm() { // is called from button save
    const title = queryElement(INPUT_TITLE).value;
    const author = queryElement(INPUT_AUTHOR).value;
    const book = {title: title, author: author};

    if (!title || !author) {
        rejectData(); // error message
    } else {
        setValue(KEY_BOOK, JSON.stringify(book)); // save to local storage
        console.log(book)
    }
}

function rejectData() { // is called when input is invalid
    const INVALID_INPUT = "Vennligst fyll ut både tittel og forfatter.";
    queryElement(OUTPUT_DIV).style.color = "red";
    queryElement(OUTPUT_DIV).innerHTML = INVALID_INPUT;
}

function clearForm() { // is called when any button is clicked
    queryElement(USER_FORM).reset();
}

function printBooks() { // is called when...
    let htmlTxt = "";
    
    getAll().forEach(book => {
        htmlTxt += `
        <article>
        <h3>${book.title}</h3>
        <p>Av: ${book.author}</p>
        </article>
        `;
    });
    queryElement(OUTPUT_DIV).innerHTML = htmlTxt;
}

//queryElement(BODY).addEventListener('load', onPageLoad());

queryElement(SAVE_BTN).addEventListener('click', () => {
    saveForm();
    printBooks();
    clearForm();
});