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

    GameModule.addGamesArrayToLocalStorage(gamesArray, gameObject);
    saveForm.reset();
}



saveBtn.addEventListener("click", () => {
    saveGame();
});