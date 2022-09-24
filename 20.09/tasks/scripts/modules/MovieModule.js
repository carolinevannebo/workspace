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
    };

    const getAllMoviesFromIdArray = (array, inputValue) => {
        let moviesByIdArray = array.filter(
            movie => movie.id === inputValue);
        return moviesByIdArray;
    }

    //localstorage
    const getValueFromLocalStorage = (key) => {
        return localStorage.setItem(key);
    }

    const setValueToLocalStorage = (key, value) => {
        return localStorage.setItem(key, value);
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
        getValueFromLocalStorage,
        setValueToLocalStorage,
        deleteKeyFromLocalStorage
    }

})();

export default MovieModule;