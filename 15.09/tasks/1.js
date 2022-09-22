const SELECTOR_NAME = "#input-name";
const SELECTOR_FOOD = "#input-favorite-food";
const USER_FORM = "#user-form";
const OUTPUT_P = "#output-p";

function queryElement(selector) {
    return document.querySelector(selector);
}

function onPageLoad() { // is called from body onLoad
    const name = getValue(KEY_NAME);
    const food = getValue(KEY_FOOD);
    
    if(!name || ! food) {
        queryElement(OUTPUT_P).innerHTML = "Antall verdier i local storage: 0";
    } else {
        queryElement(SELECTOR_NAME).value = name;
        queryElement(SELECTOR_FOOD).value = food;
        queryElement(OUTPUT_P).innerHTML = `Velkommen tilbake ${name}, din favorittmat er ${food}. Ønsker du å bestille det igjen?`;
    }
}

function saveForm() { // is called from button save
    const name = queryElement(SELECTOR_NAME).value;
    const food = queryElement(SELECTOR_FOOD).value;

    if (!name || !food) {
        rejectData();
    } else {
        setValue(KEY_NAME, name);
        setValue(KEY_FOOD, food);
        queryElement(OUTPUT_P).style.color = "black";
        queryElement(OUTPUT_P).innerHTML = `Ditt navn (${name}) og favorittmat (${food}) er nå lagret.`;
    }
}

function deleteForm() { // is called from button delete
    deleteKey(KEY_NAME);
    deleteKey(KEY_FOOD);
    queryElement(OUTPUT_P).innerHTML = "Antall verdier i local storage: 0";
}

function rejectData() { // is called when input is invalid
    const INVALID_INPUT = "Vennligst fyll ut både navn og favorittmat.";
    queryElement(OUTPUT_P).style.color = "red";
    queryElement(OUTPUT_P).innerHTML = INVALID_INPUT;
}

function clearForm() { // is called when any button is clicked
    queryElement(USER_FORM).reset();
    //queryElement(OUTPUT_P).innerHTML = "Antall verdier i local storage: 0";
}
















/*      -- SPAGETTIKODE --     
const userForm = document.querySelector("#user-form");
const inputName = document.querySelector("#input-name");
const inputFavoriteFood = document.querySelector("#input-favorite-food");
const saveBtn = document.querySelector("#save-btn");
const deleteBtn = document.querySelector("#delete-btn");
let OUTPUT_P = document.querySelector("#output-p");

//const emptyArray = [{name: `${userName}`, food: `${userFood}`}];
        
        let amount = 0;
        const userName = inputName.value;
        const userFood = inputFavoriteFood.value;
        let userObject = {name: ` ${userName}`, food: ` ${userFood}`};

        function rejectData() {
            const INVALID_INPUT = "Vennligst fyll ut både navn og favorittmat.";
            OUTPUT_P.style.color = "red";
            OUTPUT_P.innerHTML = INVALID_INPUT;
        }
        
        function addData() {
            if (!userName || !userFood) {
                rejectData();
            } else {
                dataToLocalStorage();
            }
        }
        
        function dataToLocalStorage() {
            localStorage.setItem("user", JSON.stringify(userObject));
            userObject = JSON.parse(localStorage.getItem("user"));
            
            console.log({userName});
            
            amount++;
            
            OUTPUT_P.innerHTML = `Ditt navn (${userObject.name}) og favorittmat (${userObject.food}) er nå lagret.`;
            console.log(amount);

            const welcomeBack = `Velkommen tilbake ${userObject.name}, din favorittmat er ${userObject.food}.`;
            /*if (window.onload == true) {
                OUTPUT_P.innerHTML = `Velkommen tilbake ${userObject.name}, din favorittmat er ${userObject.food}.`;
            }*/
  /*      }
        
        function deleteData() {
            localStorage.getItem("user");
            localStorage.removeItem("user");
        }
        
        function init() {
            saveBtn.addEventListener('click', addData);
            deleteBtn.addEventListener('click', deleteData);
            //retrieveDataOnRefresh();
        }

        init();
        //OUTPUT_P.innerHTML= retrieveDataOnRefresh()
        /*
        function retrieveDataOnRefresh(){
            localStorage.getItem("user");
            OUTPUT_P.innerHTML = `Velkommen tilbake ${userObject.name}, din favorittmat er ${userObject.food}.`;
        }
        */