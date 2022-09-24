import MovieModule from "./modules/MovieModule.js";

let moviesArray = [];

const inputId = MovieModule.queryElement('#input-id');
const inputTitle = MovieModule.queryElement('#input-title');
const inputCategory = MovieModule.queryElement('#input-category');
const saveBtn = MovieModule.queryElement('#save-btn');


const saveMovie = () => { // DET HER KAN DU ORDNE MED PARAMETERE I MODULE :) YAY
    const id = inputId.value;
    const title = inputTitle.value;
    const category = inputCategory.value;
    const movieObject = {id: id, title: title, category: category};

    MovieModule.addMovieObjectToMoviesArray(moviesArray, movieObject);
    MovieModule.getAllMoviesFromMoviesArray(moviesArray);
    MovieModule.setValueToLocalStorage('movies', JSON.stringify(moviesArray));
    
    const parsed = JSON.parse(MovieModule.getValueFromLocalStorage('movies'));
    moviesArray = parsed;
    console.log(moviesArray);
    
}

saveBtn.addEventListener('click', () => {
    saveMovie();
});