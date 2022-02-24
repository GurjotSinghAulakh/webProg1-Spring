/***** Oppgave 1 *****/

function heiVerden() {
    document.write("Hei Verden!!");
}

/***** Oppgave 2 *****/

function heiVerdenAlert() {
    alert("Hei Verden!!");
}

/***** Oppgave 3 *****/

function skrivMelding(innData) {
    let utData = "Du har skrevet inn følgende data: " + innData + ".";
    document.write(utData);
}

/***** Oppgave 4 *****/
function writeAlert(innData) {
    let utData = "Du har skrevet inn følgende data: " + innData + ".";
    alert(utData);
}

/***** Oppgave 5 *****/
function writeConsole(innData) {
    let utData = "Du har skrevet inn følgende data: " + innData + ".";
    console.log(utData);
}

/***** Oppgave 6 *****/
function fargetMelding(innData) {
    let utData = "Du har skrevet inn følgende data: " + innData + ".";
    let melding = utData.fontcolor("blue"); //.fontcolor brukes til å endre farge
    document.write(melding);
}

/***** Oppgave 7 *****/
function storBokstaver(innData) {
    let utData = "Du har skrevet inn følgende data: " + innData + ".";
    let melding = utData.toUpperCase(); // .toUpperCase() brukes til å få store bokstaver.
    alert(melding);
}

/***** Oppgave 8 *****/
function skrivUtEn() {
    const utData = 1;
    console.log(utData);
}

/***** Oppgave 9 *****/
let utData = 0;

function tellOpp() {
    utData ++;
    console.log(utData);
}

/***** Oppgave 10 *****/
let ut = 0;

function tellOppMelding() {
    ut++;
    console.log("Du har trykket på knappen " + ut + " ganger.");
}

function visFasit(opgNr) {
    let vis = document.querySelector(".container2:nth-child("+ opgNr + ")");
    
    if (vis.style.display === "block") {
        vis.style.display = "none";
        console.log("funker");
    }
    else {
        vis.style.cssText = "display: block";
    }
}
