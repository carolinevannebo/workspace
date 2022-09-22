const showCountriesBtn = document.querySelector("#show-countries-btn");
const outputDiv = document.querySelector("#output-div");

//const countriesArray = ["Norway", "Sweden", "Denmark"];
const countriesArray = [
    {name: "Norway", capital: "Oslo", img: "./images/norwegianFlag.webp"},
    {name: "Sweden", capital: "Stockholm", img: "./images/swedishFlag.png"},
    {name: "Denmark", capital: "Copenhagen", img: "./images/danishFlag.jpeg"}
];

function showCountries() {
    let htmlTxt = "";
    countriesArray.forEach(country => {
        htmlTxt += `
            <article>
                <h3>${country.name}</h3>
                <p>Capital: ${country.capital}</p>
                <img src="${country.img}">
            </article>
        `;
    });
    outputDiv.innerHTML = htmlTxt;
}

showCountriesBtn.addEventListener('click', showCountries);