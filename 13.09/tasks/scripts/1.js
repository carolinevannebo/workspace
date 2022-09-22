import CarhuntModule from "./modules/CarhuntModule.js";

const showAllBtn = document.querySelector("#show-all-btn");
const inputBrand = document.querySelector("#input-brand");
const searchByBrandBtn = document.querySelector("#search-by-brand-btn");
const inputMinPrice = document.querySelector("#input-min-price");
const inputMaxPrice = document.querySelector("#input-max-price");
const searchByPriceBtn = document.querySelector("#search-by-price-btn");
const sortByKmBtn = document.querySelector("#sort-by-km-btn");
const sortByPriceBtn = document.querySelector("#sort-by-price-btn");
const outputDiv = document.querySelector("#output-div");

const printCars = ( array ) => {
    let htmlTxt = "";

    array.forEach(car => {
        htmlTxt += `
            <article>
                <img src="images/${car.image}">
                <h3>${car.brand} ${car.model}</h3>
                <p>Year: ${car.year}</p>
                <p>Kilometers: ${car.kilometers}</p>
                <p>Horsepowers: ${car.horsepowers}</p>
                <p>Price: ${car.price}</p>
            </article>
        `;
    })
    outputDiv.innerHTML = htmlTxt;
}

const showAllCars = () => printCars(CarhuntModule.getAllCars());
const showCarsByBrand = () => printCars(CarhuntModule.getCarsByBrand());
const showCarsByPrice = () => printCars(CarhuntModule.getCarsByPrice());
const showCarsSortedByKm = () => printCars(CarhuntModule.getSortedByKm());
const showCarsSortedByPrice = () => printCars(CarhuntModule.getSortedByPrice());


showAllBtn.addEventListener('click', showAllCars);
searchByBrandBtn.addEventListener('click', showCarsByBrand);
searchByPriceBtn.addEventListener('click', showCarsByPrice);
sortByKmBtn.addEventListener('click', showCarsSortedByKm);
sortByPriceBtn.addEventListener('click', showCarsSortedByPrice);


export {inputBrand, inputMinPrice, inputMaxPrice};