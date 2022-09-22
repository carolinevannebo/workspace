const normalFunctionBtn = document.querySelector("#normal-function-btn");
const arrowFunctionBtn = document.querySelector("#arrow-function-btn");
let normalFunctionOutput = document.querySelector("#output-normal-function");
let arrowFunctionOutput = document.querySelector("#output-arrow-function");

function normalFunction() {
    normalFunctionOutput.innerHTML = `Fra vanlig funksjon: ${Math.random()}`;
}

const arrowFunction = () => {
    arrowFunctionOutput.innerHTML = `Fra arrow funksjon: ${Math.random()}`;
}

normalFunctionBtn.addEventListener('click', normalFunction);
arrowFunctionBtn.addEventListener('click', arrowFunction);