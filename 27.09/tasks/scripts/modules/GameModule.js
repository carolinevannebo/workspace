const GameModule = ( () => {

    //Private variables
    const queryElement = (selector) => {
        return document.querySelector(selector);
    }

    //Arrays
    const addGameObjectToGamesArray = (array, object) => { //sender objektet inn i arrayet
        array.push(object);
    }

    const getAllGamesFromGamesArray = (array) => array.map( //henter alle objekter fra arrayet
        game => { return {...game} });

    const getGamesSortedByPrice = (array) => { //returnerer et nytt array som har sortert spill basert på pris fra lav til høy
        let sortedGames = array.sort(
            (game1, game2) => game1.price > game2.price ? 1 : -1
        );
        return sortedGames;
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

    const addGamesArrayToLocalStorage = (array, object) => { //legger til ett objekt i et array og legger arrayet til i localstorage
            addGameObjectToGamesArray(array, object); //legger til objektet i arrayet
            getAllGamesFromGamesArray(array); //henter ut alle objektene fra arrayet
            setValueToLocalStorage('Games', JSON.stringify(array)); //legger arrayet til i localstorage
            array = JSON.parse(getValueFromLocalStorage('Games')); //setter arrayet lik verdien til keyen 'Games' i localstorage
    }

    const deleteKeyFromLocalStorage = (key) => { //sletter en key fra localstorage
        return localStorage.removeItem(key);
    }

    return {
        queryElement,
        addGameObjectToGamesArray,
        getAllGamesFromGamesArray,
        getGamesSortedByPrice,
        getValueFromLocalStorage,
        checkLocalStorage,
        setValueToLocalStorage,
        addGamesArrayToLocalStorage,
        deleteKeyFromLocalStorage
    }

} )();

export default GameModule;