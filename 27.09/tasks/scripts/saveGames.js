import GameModule from "./modules/GameModule.js";

let gamesArray = [];

const saveForm = GameModule.queryElement("#save-form");
const inputId = GameModule.queryElement("#input-id");
const inputTitle = GameModule.queryElement("#input-title");
const inputPrice = GameModule.queryElement("#input-price");
const inputConsole = GameModule.queryElement("#input-console");
const saveBtn = GameModule.queryElement("#save-btn");
let outputDiv = GameModule.queryElement("#output-div");

const saveGame = () => {
    const id = inputId.value;
    const title = inputTitle.value;
    const price = inputPrice.value;
    const console = inputConsole.value;
    const gameObject = { id: id, title: title, price: price, console: console };

    //gamesArray.some(game => game.id === id) ? displayErrorMessageForId() :
    //GameModule.createOrUseArray(gamesArray); 
    GameModule.addGamesArrayToLocalStorage(GameModule.createOrUseArray(gamesArray), gameObject);
    displaySuccessMessage(title, id, price, console);
    saveForm.reset();
}

const validateInput = () => {
    const id = inputId.value;
    const title = inputTitle.value;
    const price = inputPrice.value;
    const console = inputConsole.value;
    //let game = getGameByID();

    !id || !title || !price || !console ? displayErrorMessageForMissingFields() :
        //game.id === id ? displayErrorMessageForId() :    
    //getGameByID().some((game) => game.id === id) ? displayErrorMessageForId() :
        //gamesArray.some(game => game.id === id) ? displayErrorMessageForId() :
            saveGame();
}
/*
const getGameByID = () => {
    const id = inputId.value;
    /*const game = GameModule.getGameById(gamesArray, id);
    return game;*/
/*
    let gamesArray = JSON.parse(GameModule.getValueFromLocalStorage('Games'));
    let gameById = GameModule.getAllGamesFromIdArray(gamesArray, id);
    return gameById;
}*/

const displaySuccessMessage = (title, id, price, console) => {
    const successMessage = `The Game ${title} (ID ${id}) for ${price}kr on ${console} is saved.`;
    outputDiv.style.color = 'green';
    outputDiv.innerHTML = successMessage;
}

const displayErrorMessageForMissingFields = () => {
    const invalidInput = "Vennligst fyll ut alle feltene.";
    outputDiv.style.color = 'red';
    outputDiv.innerHTML = invalidInput;
}

const displayErrorMessageForId = () => {
    const invalidInput = "ID finnes allerede.";
    outputDiv.style.color = 'red';
    outputDiv.innerHTML = invalidInput;  //return????
}

saveBtn.addEventListener('click', () => {
    validateInput();
});