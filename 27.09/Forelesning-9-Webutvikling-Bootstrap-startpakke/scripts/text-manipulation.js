import TextManipulationModule from './modules/TextManipulationModule.js';

const textTxt = document.querySelector("#text-txt");
const reverseTextBtn = document.querySelector("#reverse-text-btn");
const textOutput = document.querySelector("#text-output");

const reverseText = () => {
    /* Gjøre bruk av TextManipulationModule her. */
    textOutput.innerHTML = TextManipulationModule.reverseText(textTxt.value);
}

reverseTextBtn.addEventListener("click", reverseText);