import MovieModule from "./modules/MovieModule.js";

const inputId = MovieModule.queryElement('#input-id');
const getBtn = MovieModule.queryElement('#get-btn');
const deleteBtn = MovieModule.queryElement('#delete-btn');
let outputDiv = MovieModule.queryElement('#output-div');

const getMovieById = () => {
    let moviesArray = JSON.parse(MovieModule.getValueFromLocalStorage('movies'));
    let movieById = MovieModule.getAllMoviesFromIdArray(moviesArray, inputId.value);
    return movieById;
}

const showMovie = (array) => {
    outputDiv.innerHTML = "";
    outputDiv.style.color = 'black';

    !inputId.value ? displayErrorMessage() :
    array.forEach(movie => { //er unødvendig å bruke løkke når det bare er en film?
        outputDiv.innerHTML += `
        <article>
            <h3>${movie.title} (ID: ${movie.id})</h3>
            <p>${movie.category}</p>
        </article>`;
    });
}

const removeMovie = () => {
    let moviesArray = JSON.parse(MovieModule.getValueFromLocalStorage('movies'));
    let movieToRemove = moviesArray.find(movie => movie.id === inputId.value);
    let index = moviesArray.indexOf(movieToRemove);

    moviesArray.splice(index, 1);
    MovieModule.setValueToLocalStorage('movies', JSON.stringify(moviesArray));
    displaySuccessMessage(movieToRemove.title, movieToRemove.id, movieToRemove.category);
}

const displaySuccessMessage = (title, id, category) => {
    outputDiv.style.color = 'green';
    outputDiv.innerHTML = `Filmen ${title} med ID ${id} og sjanger ${category} er slettet.`;
}

const displayErrorMessage = () => {
    outputDiv.style.color = 'red';
    outputDiv.innerHTML = "Ingen filmer med angitt ID.";
}

getBtn.addEventListener('click', () => {
    showMovie(getMovieById());
});

deleteBtn.addEventListener('click', () => {
    removeMovie();
});

/** Kan du skrive det på en annen måte?
 * - Prøv å korte ned displayErrorMessage funksjonene dine til en med parametere
 * - Muterer du arrayet? Jeg tror det ja
 */