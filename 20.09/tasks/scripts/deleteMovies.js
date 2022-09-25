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
    array.forEach(movie => {
        outputDiv.innerHTML += `
        <article>
            <h3>${movie.title} (ID: ${movie.id})</h3>
            <p>${movie.category}</p>
        </article>`;
    });
}

//nå må du bare bruke getMovieById() i en funksjon som fjerner filmobjektet fra moviesArray

getBtn.addEventListener('click', () => {
    showMovie(getMovieById());
});