import MovieModule from "./modules/MovieModule.js";

let moviesArray = [];

const inputId = MovieModule.queryElement('#input-id');
const inputTitle = MovieModule.queryElement('#input-title');
const inputCategory = MovieModule.queryElement('#input-category');
const saveBtn = MovieModule.queryElement('#save-btn');
let outputDiv = MovieModule.queryElement('#output-div');


const saveMovie = () => {
    //bør legge til en sjekk på om id allerede finnes i arrayet
    const id = inputId.value;  
    const title = inputTitle.value;
    const category = inputCategory.value;
    const movieObject = {id: id, title: title, category: category};

    MovieModule.addMoviesArrayToLocalStorage(moviesArray, movieObject);
    outputDiv.innerHTML = "";
}

const validateInput = () => {
    const id = inputId.value;  
    const title = inputTitle.value;
    const category = inputCategory.value;

    !id || !title || !category ? displayErrorMessageForMissingFields() :
    moviesArray.some(movie => movie.id === id) ? displayErrorMessageForId() :
    saveMovie();
}

const displayErrorMessageForMissingFields = () => {
    const invalidInput = "Vennligst fyll ut alle feltene";
    outputDiv.style.color = "red";
    outputDiv.innerHTML = invalidInput;
}
// bør gå an å samle disse to funksjonene til en
const displayErrorMessageForId = () => {
    const invalidInput = "Id finnes allerede";
    outputDiv.style.color = "red";
    outputDiv.innerHTML = invalidInput;
}

saveBtn.addEventListener('click', () => {
    validateInput();
});