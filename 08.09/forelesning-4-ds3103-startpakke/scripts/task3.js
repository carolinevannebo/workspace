const showCountriesBtn = document.querySelector("#show-countries-btn");
const outputUl = document.querySelector("#output-ul");

const countriesArray = ["Norway", "Sweden", "Denmark"];

function showCountries() {
    let htmlTxt = "";
    countriesArray.forEach(country => {
        htmlTxt += `
            <li>${country}</li>
        `;
    });
    outputUl.innerHTML = htmlTxt;
}

showCountriesBtn.addEventListener('click', showCountries);