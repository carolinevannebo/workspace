const userForm = document.querySelector('#user-form');
const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const saveBtn = document.querySelector('#save-btn');
const deleteBtn = document.querySelector('#delete-btn');
const outputP = document.querySelector("#output-p");
const outputDiv = document.querySelector('#output-div');

function getValue(key) { // Function to get value from localStorage - would be in it's own file
    return localStorage.getItem(key);
}

function setValue(key, value) { // Function to set value in localStorage - would be in it's own file
    localStorage.setItem(key, value);
}

function deleteKey(key) { // Function to delete a key from localStorage - would be in it's own file
    localStorage.removeItem(key);
}

function clearForm() { // Function to clear the input fields
    userForm.reset();
}

function checkLocalStorage() { // Check if localStorage is empty or not and display message
    outputP.style.color = "black";
    if (localStorage.length > 0) {
        outputP.innerHTML = "Local Storage inneholder informasjon.";
    } else {
        outputP.innerHTML = "Local Storage er tom.";
    }
}

function rejectData() { // Function to display error message
    const invalidInput = "Vennligst fyll ut både tittel og forfatter.";
    outputP.style.color = "red";
    outputP.innerHTML = invalidInput;
}

function localStorageArrayExist() {
    const doesExist = getValue("books") === null ? false : true; // If the array does not exist, return false
    return doesExist;
}

function showBooksFromLocalStorage() {
    if (localStorage.length > 0) { // If localStorage is not empty, do:
        const bookArray = JSON.parse(getValue("books")); // Parse the array
        let htmlTxt = "";

        bookArray.forEach(book => { // Loop through the bookArray and create a string with the book info
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
    const bookObject = {title: title, author: author}; // Create an object with the input values
    let bookArray;

    if (!title || !author) { // Reject if input is empty
        rejectData(); // Reject data if title or author is empty with a message
    } else if (localStorageArrayExist() === true) { // If array exist, add to it
        const parsed = JSON.parse(getValue('books')); // Parse the array
        bookArray = parsed; // Set the parsed array to the bookArray
    } else {
        bookArray = []; // If array does not exist, create an empty array
    }
    
    bookArray.push(bookObject); // Push the bookObject to the bookArray
    const newBookArray = JSON.stringify(bookArray); // Stringify the bookArray
    setValue('books', newBookArray); // Set the newBookArray to the localStorage

    clearForm();
    checkLocalStorage();
    showBooksFromLocalStorage();
}

function deleteLocalStorage() {
    deleteKey('books');
    checkLocalStorage();
    outputDiv.innerHTML = "";
}

(init = () => { // IIFE (Immediately Invoked Function Expression) to initialize the app
    checkLocalStorage();
    showBooksFromLocalStorage();
})()

saveBtn.addEventListener('click', saveInputToLocalStorage);
deleteBtn.addEventListener('click', deleteLocalStorage);



//                  --- THE PROGRESS OF SPAGETTI KODE :)) ---
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