const TextManipulationModule = ( ()=> {

    const version = 1.0;

    const reverseText = (text) => {
        return text.split('').reverse().join('').toLowerCase();
        /* 
            split: lager en array, deler opp tekst i enkelttegn og legger enkelttegnene i arrayet
            reverse: reverserer rekkefølgen på arrayet
            join: samler alle tegnene i arrayet til en tekst
            toLowerCase: gjør at alle bokstavene blir små
        */
    }

    return {
        reverseText
    }

})();

export default TextManipulationModule;