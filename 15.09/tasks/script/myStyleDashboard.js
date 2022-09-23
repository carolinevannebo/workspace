const BODY = "body";
const STYLING_FORM = "#styling-form";
const SELECTOR_TXT = "#input-txt-color";
const SELECTOR_BG = "#input-bg-color";
const SAVE_BTN = "#save-btn";
const DELETE_BTN = "#delete-btn";
const OUTPUT_DIV = "#output-div";

function queryElement(selector) { // Function to query an element
    return document.querySelector(selector);
}

function onPageLoad() { // is called from body onLoad
    const txt = getValue(KEY_TXT);
    const bg = getValue(KEY_BG);
    
    if(!txt || !bg) { // If input is empty, do:
        queryElement(OUTPUT_DIV).innerHTML = "Ingen stil er satt.";
    } else {
        queryElement(OUTPUT_DIV).innerHTML = `Stilen er lagret. Tekstfarge: ${txt} og bakgrunnsfarge: ${bg}.`;
    }
}

function saveForm() { // is called from button save
    const txt = queryElement(SELECTOR_TXT).value;
    const bg = queryElement(SELECTOR_BG).value;
    let hex = /^#[0-9A-F]{6}$/i;

    if (!txt || !bg) {
        rejectData(); // error message
    } else if (!hex.test(txt) || !hex.test(bg)) {
        rejectData(); // error message
    } else {
        setValue(KEY_TXT, txt);
        setValue(KEY_BG, bg);
        queryElement(OUTPUT_DIV).style.color = "black";
        queryElement(OUTPUT_DIV).innerHTML = `Stilen er lagret. Tekstfarge: ${txt} og bakgrunnsfarge: ${bg}.`;
    }
}

function deleteForm() { // is called from button delete
    deleteKey(KEY_TXT);
    deleteKey(KEY_BG);
    queryElement(OUTPUT_DIV).style.color = "black";
    queryElement(OUTPUT_DIV).innerHTML = "Ingen stil er satt.";
}

function rejectData() { // is called when input is invalid
    const INVALID_INPUT = "Vennligst fyll ut gyldig tekstfarge og bakgrunnsfarge i HEX-format. (f.eks. #000000)";
    queryElement(OUTPUT_DIV).style.color = "red";
    queryElement(OUTPUT_DIV).innerHTML = INVALID_INPUT;
}

function clearForm() { // is called when any button is clicked
    queryElement(STYLING_FORM).reset();
}

queryElement(BODY).addEventListener("load", onPageLoad());

queryElement(SAVE_BTN).addEventListener('click', () => {
    saveForm();
    clearForm();
});

queryElement(DELETE_BTN).addEventListener('click', () => {
    deleteForm();
    clearForm();
});