import MovieModule from "./modules/MovieModul.js";

const inputId = MovieModule.queryElement('#input-id');
const getBtn = MovieModule.queryElement('#get-btn');
const deleteBtn = MovieModule.queryElement('#delete-btn');
let outputDiv = MovieModule.queryElement('#output-div');

const getMovieById = () => {
    let moviesArray = JSON.parse(MovieModule.getValueFromLocalStorage('movies'));
    let moviesById = MovieModule.getAllMoviesFromIdArray(moviesArray, inputId.value);
    let movie = MovieModule.getMoviesSorted(moviesById);
    return movie;
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

getBtn.addEventListener('click', () => {
    showMovie(getMovieById());
});