const SELECTOR_NAME="#input-name";
const SELECTOR_FOOD="#input-favorite-food";

function queryElement(selector) {
    return document.querySelector(selector);
}

function onPageLoad() { // is called from body onLoad
    const name = getValue(KEY_NAME);
    const food = getValue(KEY_FOOD);
    if(!name || ! food) {
        // show error text
    } else {
        queryElement(SELECTOR_NAME).value = name;
        queryElement(SELECTOR_FOOD).value = food;

    }
}

function saveForm() { // is called from button save
    const name = queryElement(SELECTOR_NAME).value;
    const food = queryElement(SELECTOR_FOOD).value;
    setValue(KEY_NAME, name);
    setValue(KEY_FOOD, food);
}

/*
const userForm = document.querySelector("#user-form");
const inputName = document.querySelector("#input-name");
const inputFavoriteFood = document.querySelector("#input-favorite-food");
const saveBtn = document.querySelector("#save-btn");
const deleteBtn = document.querySelector("#delete-btn");
let outputP = document.querySelector("#output-p");

//const emptyArray = [{name: `${userName}`, food: `${userFood}`}];
        
        let amount = 0;
        const userName = inputName.value;
        const userFood = inputFavoriteFood.value;
        let userObject = {name: ` ${userName}`, food: ` ${userFood}`};

        function rejectData() {
            const invalidInput = "Vennligst fyll ut både navn og favorittmat.";
            outputP.style.color = "red";
            outputP.innerHTML = invalidInput;
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
            
            outputP.innerHTML = `Ditt navn (${userObject.name}) og favorittmat (${userObject.food}) er nå lagret.`;
            console.log(amount);

            const welcomeBack = `Velkommen tilbake ${userObject.name}, din favorittmat er ${userObject.food}.`;
            /*if (window.onload == true) {
                outputP.innerHTML = `Velkommen tilbake ${userObject.name}, din favorittmat er ${userObject.food}.`;
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
        //outputP.innerHTML= retrieveDataOnRefresh()
        /*
        function retrieveDataOnRefresh(){
            localStorage.getItem("user");
            outputP.innerHTML = `Velkommen tilbake ${userObject.name}, din favorittmat er ${userObject.food}.`;
        }
        */