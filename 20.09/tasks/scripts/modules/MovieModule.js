const MovieModule = ( () => {

    // Private variables
    const queryElement = (selector) => {
        return document.querySelector(selector);
    }

    //arrays
    const addMovieObjectToMoviesArray = (array, object) => { //object skal være movieObject
        array.push(object);
    }
    const getAllMoviesFromMoviesArray = (array) => array.map(
        movie => { return {...movie} });

    const getAllMoviesFromCategoryArray = (array, inputValue) => { //array refererer til moviesArray
        let moviesBycategoryArray = array.filter(
            movie => movie.category === inputValue); //noe annet enn inputCategory.value? prøver dette
        return moviesBycategoryArray;
    }

    const getAllMoviesFromIdArray = (array, inputValue) => {
        let moviesByIdArray = array.filter(
            movie => movie.id === inputValue);
        return moviesByIdArray;
    }

    const getMoviesSorted = (array) => {
        let sortedMovies = array.sort(
            (movie1, movie2) => movie1.id > movie2.id ? 1 : -1
        );
        return sortedMovies;
    }

    //localstorage
    const getValueFromLocalStorage = (key) => {
        return localStorage.getItem(key);
    }

    const checkLocalStorage = (array) => {
        const doesArrayExist = getAllMoviesFromMoviesArray(array) === null ? false : true;
        return doesArrayExist;
    }

    const setValueToLocalStorage = (key, value) => {
        return localStorage.setItem(key, value);
    }

    const addMoviesArrayToLocalStorage = (array, object) => {
            addMovieObjectToMoviesArray(array, object);
            getAllMoviesFromMoviesArray(array);
            setValueToLocalStorage('movies', JSON.stringify(array));
            array = JSON.parse(getValueFromLocalStorage('movies'));
    }

    const deleteKeyFromLocalStorage = (key) => {
        return localStorage.removeItem(key);
    }


    return {
        queryElement,
        addMovieObjectToMoviesArray,
        getAllMoviesFromMoviesArray,
        getAllMoviesFromCategoryArray,
        getAllMoviesFromIdArray,
        getMoviesSorted,
        getValueFromLocalStorage,
        checkLocalStorage,
        setValueToLocalStorage,
        addMoviesArrayToLocalStorage,
        deleteKeyFromLocalStorage
    }

})();

export default MovieModule;