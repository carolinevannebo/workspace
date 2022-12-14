import MovieModule from "./modules/MovieModule.js";

let moviesArray = [];

const inputId = MovieModule.queryElement('#input-id');
const inputTitle = MovieModule.queryElement('#input-title');
const inputCategory = MovieModule.queryElement('#input-category');
const saveBtn = MovieModule.queryElement('#save-btn');
let outputDiv = MovieModule.queryElement('#output-div');


const saveMovie = () => {
    const id = inputId.value;  
    const title = inputTitle.value;
    const category = inputCategory.value;
    const movieObject = {id: id, title: title, category: category};

    //bør sjekke om moviesArray eksisterer i localstorage, egen funksjon?
    MovieModule.addMoviesArrayToLocalStorage(moviesArray, movieObject);
    displaySuccessMessage(title, id, category);
}

const validateInput = () => {
    const id = inputId.value;  
    const title = inputTitle.value;
    const category = inputCategory.value;

    !id || !title || !category ? displayErrorMessageForMissingFields() :
    moviesArray.some(movie => movie.id === id) ? displayErrorMessageForId() :

    saveMovie(); //vil legge til i localstorage, ikke oppdatere
}

const displaySuccessMessage = (title, id, category) => {
    const successMessage = `Filmen ${title} med ID ${id} og sjanger ${category} er lagret.`;
    outputDiv.style.color = 'green';
    outputDiv.innerHTML = successMessage;
}

const displayErrorMessageForMissingFields = () => {
    const invalidInput = "Vennligst fyll ut alle feltene.";
    outputDiv.style.color = 'red';
    outputDiv.innerHTML = invalidInput;
}
// bør gå an å samle disse to funksjonene til en
const displayErrorMessageForId = () => {
    const invalidInput = "ID finnes allerede.";
    outputDiv.style.color = 'red';
    outputDiv.innerHTML = invalidInput;
}

saveBtn.addEventListener('click', () => {
    validateInput();
});