
// Tomt infomasjonsarray
const info = [];

function registrerBilletter() {
    let ut = "";

    let valgt_film = document.getElementById("utValgtFilm");
    let valgt_antallbilletter = document.getElementById("antallBilletter");
    let valgt_fornavn = document.getElementById("fornavn");
    let valgt_etternavn = document.getElementById("etternavn");
    let valgt_telefonNo = document.getElementById("telefonNo");
    let valgt_epost = document.getElementById("epost");

    /*
    Ved hjelp av if-setninger vil da teller, telle opp hvor mange input felt som er fylt. Hvis og bare hvis
    teller er 6 (når alle input felt er fylt), da vil den retunere informasjonsskjemaet.
     */

    let teller = 0;

    if(valgt_film.value == "Velg film her") {
        document.getElementById("feilmelding_film").innerHTML = "Velg film!!!";
    }
    else {
        document.getElementById("feilmelding_film").innerHTML = " ";
        teller ++;
    }

    if(valgt_antallbilletter.value == "") {
        document.getElementById("feilmelding_antall").innerHTML = "Må skrive noe inn i antall!";
    }
    else {
        document.getElementById("feilmelding_antall").innerHTML = " ";
        teller ++;
    }

    if(valgt_fornavn.value == "") {
        document.getElementById("feilmelding_fornavn").innerHTML = "Må skrive noe inn i fornavnet!";
    }
    else {
        document.getElementById("feilmelding_fornavn").innerHTML = " ";
        teller ++;
    }

    if(valgt_etternavn.value == "") {
        document.getElementById("feilmelding_etternavn").innerHTML = "Må skrive noe inn i etternavnet!";
    }
    else {
        document.getElementById("feilmelding_etternavn").innerHTML = " ";
        teller ++;
    }

    if(valgt_telefonNo.value == "") {
        document.getElementById("feilmelding_telefonNo").innerHTML = "Må skrive noe inn i telefonnr!";
    }
    else {
        document.getElementById("feilmelding_telefonNo").innerHTML = " ";
        teller ++;
    }

    if(valgt_epost.value == "") {
        document.getElementById("feilmelding_epost").innerHTML = "Må skrive noe inn i epost!";
    }
    else {
        document.getElementById("feilmelding_epost").innerHTML = " ";
        teller ++;
    }

    if(teller == 6){

        let innFilm = document.getElementById("utValgtFilm").value;
        let innAntallBilletter = document.getElementById("antallBilletter").value;
        let innFornavn = document.getElementById("fornavn").value;
        let innEtternavn = document.getElementById("etternavn").value;
        let innTelefonNo = document.getElementById("telefonNo").value;
        let innEpost = document.getElementById("epost").value;

        const objPerson = {
            Film: innFilm,
            AntallBilletter: innAntallBilletter,
            Fornavn: innFornavn,
            Etternavn: innEtternavn,
            TelefonNo: innTelefonNo,
            Epost: innEpost
        };

        info.push(objPerson);

        ut += "<table id='person_tabell'>" +
            "<tr>" +
            "<th>Film &nbsp; &nbsp; &nbsp; &nbsp;</th>" +
            "<th>Antall Billetter &nbsp; &nbsp; &nbsp; &nbsp;</th>" +
            "<th>Fornavn &nbsp; &nbsp; &nbsp; &nbsp;</th>" +
            "<th>Etternavn &nbsp; &nbsp; &nbsp; &nbsp;</th>" +
            "<th>Telefon No. &nbsp; &nbsp; &nbsp; &nbsp;</th>" +
            "<th>Epost &nbsp; &nbsp; &nbsp; &nbsp;</th>" +
            "</tr>";

        for (let i = 0; i < info.length; i++) {
            console.log(info[i]);
            ut += "<tr> " +
                "<th>" + info[i].Film + "&nbsp; &nbsp; &nbsp; &nbsp;" + "</th> " +
                "<th>" + info[i].AntallBilletter + "&nbsp; &nbsp; &nbsp; &nbsp;" + "</th> " +
                "<th>" + info[i].Fornavn + "&nbsp; &nbsp; &nbsp; &nbsp;" + "</th> " +
                "<th>" + info[i].Etternavn + "&nbsp; &nbsp; &nbsp; &nbsp;" + "</th> " +
                "<th>" + info[i].TelefonNo + "&nbsp; &nbsp; &nbsp; &nbsp;" + "</th> " +
                "<th>" + info[i].Epost + "</th>" +
                "</tr>";
        }

        ut += "</table>";

        document.getElementById("utValgtFilm").value = "Velg film her";
        document.getElementById("antallBilletter").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonNo").value = "";
        document.getElementById("epost").value = "";
        document.getElementById("utInfo").innerHTML = ut;
    }

}

function sletterData() {
    info.splice(0, info.length);
    document.getElementById("utInfo").innerHTML =
        "<table id='person_tabell'>" +
        "<tr>" +
        "<th>Film &nbsp; &nbsp; &nbsp; &nbsp;</th>" +
        "<th>Antall Billetter &nbsp; &nbsp; &nbsp; &nbsp;</th>" +
        "<th>Fornavn &nbsp; &nbsp; &nbsp; &nbsp;</th>" +
        "<th>Etternavn &nbsp; &nbsp; &nbsp; &nbsp;</th>" +
        "<th>Telefon No. &nbsp; &nbsp; &nbsp; &nbsp;</th>" +
        "<th>Epost &nbsp; &nbsp; &nbsp; &nbsp;</th>" +
        "</tr>";
}
