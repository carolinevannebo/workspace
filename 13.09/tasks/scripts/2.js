const addToCartBtn = document.querySelector(".add-to-cart-btn");
const addDiavolaBtn = document.querySelector("#add-diavola-btn");
const addDiParmaBtn = document.querySelector("#add-diparma-btn");
const outputDiv = document.querySelector("#output-div");

let pizzaObject = {name: "", img: "", price: 0};

const shoppingCartArray = [];

function addDiavola() {
    pizzaObject = {name: "Pizza Diavola", img: "../images/pizza-diavola.jpeg", price: 199};
    shoppingCartArray.push(pizzaObject);
    printPizzas();
}

function addDiParma() {
    pizzaObject = {name: "Pizza Di Parma", img: "../images/pizza-diparma.webp", price: 159};
    shoppingCartArray.push(pizzaObject);
    printPizzas();
}

const printPizzas = () => {
    let htmlTxt = "";
    
    const initialValue = 0;
    const sumWithInitial = shoppingCartArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price,
        initialValue
    );
        
    console.log(sumWithInitial);
    shoppingCartArray.forEach(pizza => {
        htmlTxt += `
        <p>Totalpris: ${sumWithInitial},-</p>
        <article>
        <h3>${pizza.name}</h3>
        <p>Pris: ${pizza.price},-</p>
        </article>
        `;
    })
    outputDiv.innerHTML = htmlTxt;
    console.log(shoppingCartArray);
}

addDiavolaBtn.addEventListener('click', addDiavola);
addDiParmaBtn.addEventListener('click', addDiParma);