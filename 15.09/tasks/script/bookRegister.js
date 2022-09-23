const body = document.querySelector('body');
const userForm = document.querySelector('#user-form');
const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const saveBtn = document.querySelector('#save-btn');
const deleteBtn = document.querySelector('#delete-btn');
const outputDiv = document.querySelector('#output-div');

const emptyArray = [];

function getValue(key) {
    return localStorage.getItem(key);
}

function setValue(key, value) {
    localStorage.setItem(key, value);
}

function deleteKey(key) {
    localStorage.removeItem(key);
}

function getAll() {
    const bookArray = emptyArray.map(object => {
        return {...object}
    });
    return bookArray;
}

function saveInputToLocalStorage() {
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const book = {title: title, author: author};
    
    if (!title || !author) {
        console.log("wrong input");
    } else {
        const bookObject = JSON.stringify(book);
        setValue('book', bookObject);
        const stringFromLocalStorage = getValue('book');
        const parsedObject = JSON.parse(stringFromLocalStorage);
        console.log(parsedObject);
    }
}

saveBtn.addEventListener('click', saveInputToLocalStorage);