const body = document.querySelector('body');
const userForm = document.querySelector('#user-form');
const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const saveBtn = document.querySelector('#save-btn');
const deleteBtn = document.querySelector('#delete-btn');
const outputP = document.querySelector("#output-p");
const outputDiv = document.querySelector('#output-div');

function getValue(key) {
    return localStorage.getItem(key);
}

function setValue(key, value) {
    localStorage.setItem(key, value);
}

function deleteKey(key) {
    localStorage.removeItem(key);
}

function clearForm() {
    userForm.reset();
}

function checkLocalStorage() {
    outputP.style.color = "black";
    if (localStorage.length > 0) {
        outputP.innerHTML = "Local Storage inneholder informasjon.";
    } else {
        outputP.innerHTML = "Local Storage er tom.";
    }
}

function rejectData() {
    const invalidInput = "Vennligst fyll ut både tittel og forfatter.";
    outputP.style.color = "red";
    outputP.innerHTML = invalidInput;
}

function localStorageArrayExist() {
    const doesExist = getValue("books") === null ? false : true;
    return doesExist;
}

function showBooksFromLocalStorage() {
    if (localStorage.length > 0) {
        const bookArray = JSON.parse(getValue("books"));
        let htmlTxt = "";

        bookArray.forEach(book => {
            htmlTxt += `
                <article>
                    <h3>${book.title}</h3>
                    <p>Av: ${book.author}</p>
                </article>`
        });
        outputDiv.innerHTML = htmlTxt;
    }
}

function saveInputToLocalStorage() {
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const bookObject = {title: title, author: author};
    let bookArray;

    if (!title || !author) {
        rejectData();
    } else if (localStorageArrayExist() === true) {
        const parsed = JSON.parse(getValue('books'));
        bookArray = [...parsed, bookObject];
        console.log(parsed);
    } else {
        bookArray = [];
    }
    
    bookArray.push(bookObject);
    const newBookArray = JSON.stringify(bookArray);
    setValue('books', newBookArray);

    clearForm();
    checkLocalStorage();
    showBooksFromLocalStorage();
}

function deleteLocalStorage() {
    deleteKey('books');
    checkLocalStorage();
    outputDiv.innerHTML = "";
}

(init = () => {
    checkLocalStorage();
    showBooksFromLocalStorage();
})()

saveBtn.addEventListener('click', saveInputToLocalStorage);
deleteBtn.addEventListener('click', deleteLocalStorage);

/*function init() {
    checkLocalStorage();
    showBooksFromLocalStorage();
}*/

/*const input = () => {
    const _firstname = firstname.value;
    const _fFood = fFood.value;

    const newCandidate = {
        name: _firstname,
        Food: _fFood
    }

    let localArray;


    if (localStorageArrayExist() === true) {
        const arrayInLocalstorage = localStorage.getItem("book");
        const inputIntoLocalStorage = JSON.parse(arrayInLocalstorage);
        localArray = inputIntoLocalStorage
    } else {
        localArray = [];
    }

    localArray.push(newCandidate);
    const stringafyedArray = JSON.stringify(localArray);
    localStorage.setItem("book", stringafyedArray);

}*/

/*
function addNewBookToLocalStorage(title, author) {
    let bookArray = [];
    const book = {title: title, author: author};

    bookArray.push(book);
    bookArray = bookArray.concat(JSON.parse(getValue('bookArray')||'[]'));
    console.log(bookArray);

    setValue('bookArray', JSON.stringify(bookArray));
}*/
/*
function addNewBookToLocalStorage() {
    let emptyArray = [];
    const title = inputTitle.value;
    const author = inputAuthor.value;
    //let bookArray = JSON.parse(getValue('bookArray')||'[]');
    const book = {title: title, author: author};
    emptyArray.push(book);
    let finalArray = getValue('emptyArray') != undefined ? [...emptyArray, ...JSON.parse(getValue('emptyArray'))] : emptyArray;

    setValue('emptyArray', JSON.stringify(finalArray));
}*/

/*
function addNewBookToLocalStorage() {
    let bookArray;

    if (localStorage.length > 0) {
        bookArray = JSON.parse(getValue("books"));
    } else {
        bookArray = [];
    }

    const title = inputTitle.value;
    const author = inputAuthor.value;
    const newBook = { title: title, author: author };

    bookArray.push(newBook);
    setValue("books", JSON.stringify(bookArray));

    checkLocalStorage();
    showBooks();
}*/


//saveBtn.addEventListener('click', addNewBookToLocalStorage());