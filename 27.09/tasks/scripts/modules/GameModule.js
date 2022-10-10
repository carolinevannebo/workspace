const GameModule = ( () => {

    //Private variables
    const queryElement = (selector) => {
        return document.querySelector(selector);
    }

    //Arrays
    const addGameObjectToGamesArray = (array, object) => { //sender objektet inn i arrayet
        return array.push(object);
    }

    const getAllGamesFromGamesArray = (array) => array.map( //henter alle objekter fra arrayet
        game => { return {...game} });

    const getAllGamesFromIdArray = (array, inputValue) => {
        let gamesByIdArray = array.filter(
            game => game.id === inputValue);
            return gamesByIdArray;
    }

    const getGamesSortedByPrice = (array) => { //returnerer et nytt array som har sortert spill basert på pris fra lav til høy
        let sortedGames = array.sort(
            (game1, game2) => game1.price > game2.price ? 1 : -1
        );
        return sortedGames;
    }

    const getGamesLessThanPrice = (array, inputValue) => { //returnerer et nytt array som har spill som er billigere enn inputverdien
        let gamesLessThanPrice = array.filter(
            game => game.price < inputValue);
        return gamesLessThanPrice;
    }

    //LocalStorage
    const getValueFromLocalStorage = (key) => { //henter ut verdien til en key fra localstorage, denne verdien skal da være et array
        return localStorage.getItem(key);
    }

    const checkLocalStorage = (array) => { //sjekker om arrayet eksisterer i localstorage
        const doesArrayExist = getAllGamesFromGamesArray(array) === null ? false : true;
        return doesArrayExist;
    }

    const setValueToLocalStorage = (key, value) => { //setter en key til en verdi i localstorage
        return localStorage.setItem(key, value);
    }

    const createOrUseArray = (array) => { //legger til ett objekt i et array og legger arrayet til i localstorage
        let newGamesArray;
        checkLocalStorage(array) === true ? newGamesArray = JSON.parse(getValueFromLocalStorage('Games')) : newGamesArray = []; //sjekker om arrayet eksisterer i localstorage, hvis det gjør det så henter den ut arrayet og parser det, hvis ikke så lager den et tomt array
        return newGamesArray;
    }

    const addGamesArrayToLocalStorage = (array, object) => {
        addGameObjectToGamesArray(array, object); //legger til objektet i arrayet
        setValueToLocalStorage('Games', JSON.stringify(array)); //legger arrayet til i localstorage
    }

    const deleteKeyFromLocalStorage = (key) => { //sletter en key fra localstorage
        return localStorage.removeItem(key);
    }

    return {
        queryElement,
        addGameObjectToGamesArray,
        getAllGamesFromGamesArray,
        getAllGamesFromIdArray,
        getGamesSortedByPrice,
        getGamesLessThanPrice,
        getValueFromLocalStorage,
        checkLocalStorage,
        setValueToLocalStorage,
        createOrUseArray,
        addGamesArrayToLocalStorage,
        deleteKeyFromLocalStorage
    }

} )();

export default GameModule;