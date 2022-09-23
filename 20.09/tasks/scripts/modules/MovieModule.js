const MovieModule = ( () => {

    const moviesArray = [];
    const inputId = document.querySelector('#id');
    const inputTitle = document.querySelector('#title');
    const inputCategory = document.querySelector('#category');
    const movieObject = {id: inputId.value, title: inputTitle.value, category: inputCategory.value};

    const getAll = () => moviesArray.map(
        movie => { return {...movie} });

    const getCategory = () => {
        let moviesBycategoryArray = moviesArray.filter(
            movie => movie.category === inputCategory);
        return moviesBycategoryArray;
    };

    const getId = () => {
        let moviesByIdArray = moviesArray.filter(
            movie => movie.id === inputId);
        return moviesByIdArray;
    }

    const getValue = (key) => {
        return localStorage.setItem(key);
    }

    const setValue = (key, value) => {
        localStorage.setItem(key, value);
    }

    const deleteKey = (key) => {
        localStorage.removeItem(key);
    }


    return {
        getAll,
        getCategory,
        getId,
        getValue,
        setValue,
        deleteKey
    }

})();

export default MovieModule;