import MovieModule from "./modules/MovieModule";

let moviesArray = [];

const inputCategory = MovieModule.queryElement('#input-category');
const showAllBtn = MovieModule.queryElement('#show-all-btn');
const showByCategoryBtn = MovieModule.queryElement('#show-by-category-btn');
const outputDiv = MovieModule.queryElement('#output-div');

const showAllMovies = () => {
    moviesArray = JSON.parse(MovieModule.getValueFromLocalStorage('movies'));
    let allMovies = MovieModule.getAllMoviesFromMoviesArray(moviesArray);
    outputDiv.innerHTML = "";
    allMovies.forEach(movie => {
        outputDiv.innerHTML += `<p>${movie.id} ${movie.title} ${movie.category}</p>`;
    })
}

showAllBtn.addEventListener('click', () => {
    showAllMovies();
});