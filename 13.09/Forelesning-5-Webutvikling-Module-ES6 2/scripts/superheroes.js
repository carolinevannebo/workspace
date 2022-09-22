import SuperheroModule from "./SuperheroModule.js"; // importerer SuperheroModule inn i superheroes.js slik at vi har tilgang til all dens funksjonalitet

/*
    ***
    HTML objects
    ***
*/
const showAllBtn = document.querySelector("#show-all-btn");
const superheroesOutput = document.querySelector("#superheroes-output");


/*
    ***
    Functions
    ***
*/
const showSuperheroes = ( array ) => { // Arrow function med 1 parameter. Funksjonen tar imot en array som den så looper gjennom med foreach for å skape innhold på nettsiden.
    
    let htmlTxt = "";

    array.forEach( superhero => { 
        htmlTxt += `
            <article>
                <h3 class="${ superhero.good ? "superhero__title--good" : "superhero__title--evil" }">${ superhero.name }</h3>
                <img src="images/${ superhero.image }">
            </article>
        `;
    } )

    // Teknikken brukt over i h3 heter Ternary operator: ${ betingelse ? "Hvis betingelse er sann" : "Hvis betingelse ikke er sann" }

    superheroesOutput.innerHTML = htmlTxt;
}

const showAll = () => showSuperheroes( SuperheroModule.getAll() );


/*
    ***
    Event setting
    ***
*/
showAllBtn.addEventListener("click", showAll);
// Alternativ måte å sette event og funksjonalitet på (kan diskuteres om hva som er best): showAllBtn.addEventListener("click", () => showSuperheroes( SuperheroModule.getAll() ) );

//showSuperheroes( SuperheroModule.getAll() ); // Her sender vi inn et array til funksjonen showSuperheroes som vi får fra getAll-funksjonen i SuperheroModule.