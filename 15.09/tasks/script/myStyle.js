const BODY = "body";
const DEFAULT_MSG = "#default-msg";

function queryElement(selector) {
    return document.querySelector(selector);
}

function setStyle() {
    const txt = getValue(KEY_TXT);
    const bg = getValue(KEY_BG);

    if (!txt || !bg) {
        console.log("No colors in local storage");
    } else {
        queryElement(BODY).style.color = txt;
        queryElement(BODY).style.backgroundColor = bg;
        queryElement(DEFAULT_MSG).style.display = "none";
    }
}

queryElement(BODY).addEventListener("load", setStyle());