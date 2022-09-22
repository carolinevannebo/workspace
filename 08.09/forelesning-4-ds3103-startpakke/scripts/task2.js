const multiplicationBtn = document.querySelector("#multiplication-btn");
const divisionBtn = document.querySelector("#division-btn");
const additionBtn = document.querySelector("#addition-btn");
const subtractionBtn = document.querySelector("#subtraction-btn");

let multiplicationOutput = document.querySelector("#multiplication-output");
let divisionOutput = document.querySelector("#division-output");
let additionOutput = document.querySelector("#addition-output");
let subtractionOutput = document.querySelector("#subtraction-output");

let number1Input = document.querySelector("#number1-input");
let number2Input = document.querySelector("#number2-input");


const multiplication = (number1, number2) => {
    number1 = number1Input.value;
    number2 = number2Input.value;
    let result = number1 * number2;

    let htmlTxt = `${number1} * ${number2} = ${result}`;

    multiplicationOutput.innerHTML = htmlTxt;
}

const division = (number1, number2) => {
    number1 = number1Input.value;
    number2 = number2Input.value;
    let result = number1 / number2;

    let htmlTxt = `${number1} / ${number2} = ${result}`;

    divisionOutput.innerHTML = htmlTxt;
}

const addition = (number1, number2) => {
    number1 = parseInt(number1Input.value);
    number2 = parseInt(number2Input.value);
    let result = number1 + number2;

    let htmlTxt = `${number1} + ${number2} = ${result}`;

    additionOutput.innerHTML = htmlTxt;
}

const subtraction = (number1, number2) => {
    number1 = number1Input.value;
    number2 = number2Input.value;
    let result = number1 - number2;

    let htmlTxt = `${number1} - ${number2} = ${result}`;

    subtractionOutput.innerHTML = htmlTxt;
}

multiplicationBtn.addEventListener('click', multiplication);
divisionBtn.addEventListener('click', division);
additionBtn.addEventListener('click', addition);
subtractionBtn.addEventListener('click', subtraction);