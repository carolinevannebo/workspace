import MovieModule from "./modules/MovieModule.js";

const inputCategory = MovieModule.queryElement('#input-category');
const showAllBtn = MovieModule.queryElement('#show-all-btn');
const showByCategoryBtn = MovieModule.queryElement('#show-by-category-btn');
let outputDiv = MovieModule.queryElement('#output-div');

const getAllMovies = () => {
    let moviesArray = JSON.parse(MovieModule.getValueFromLocalStorage('movies'));
    let allMovies = MovieModule.getAllMoviesFromMoviesArray(moviesArray);
    let allMoviesSorted = MovieModule.getMoviesSorted(allMovies);
    return allMoviesSorted;
}

const getMoviesByCategory = () => {
    let moviesArray = JSON.parse(MovieModule.getValueFromLocalStorage('movies'));
    let moviesByCategory = MovieModule.getAllMoviesFromCategoryArray(moviesArray, inputCategory.value);
    let moviesByCategorySorted = MovieModule.getMoviesSorted(moviesByCategory);
    return moviesByCategorySorted;
}

const showMovies = (array) => {
    outputDiv.style.color = 'black';
    outputDiv.innerHTML = "";

    !inputCategory.value || array.length === 0 ? displayErrorMessage() :
    array.forEach(movie => {
        outputDiv.innerHTML += `
        <article>
            <h3>${movie.title} (ID: ${movie.id})</h3>
            <p>${movie.category}</p>
        </article>`;
    });
}

const displayErrorMessage = () => {
    outputDiv.style.color = 'red';
    outputDiv.innerHTML = "Ingen filmer i den kategorien.";
}

showAllBtn.addEventListener('click', () => {
    showMovies(getAllMovies());
});

showByCategoryBtn.addEventListener('click', () => {
    showMovies(getMoviesByCategory());
});