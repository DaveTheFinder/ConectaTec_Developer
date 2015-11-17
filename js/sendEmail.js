/** Created by davidsaenz on 03/09/15. **/

var matriculaTxt, checkBox, ind, yInd, opcionDocumento, indC, yIndC, copiasC, indK, yIndK, copiasK, message;
var indCIng, yIndCIng, copiasCIng, indKIng, yIndKIng, copiasKIng;

function sendTheEmail() {
    if ((document.getElementById("matricula").value.length < 8 || document.getElementById("matricula").value.length > 8) || isNaN(document.getElementById("matricula").value) == true) {
        alert("¡Ops! Puede que hayas escrito tu matrícula con caracteres de más o de menos... " +
            "o que tenga caracteres incorrectos. Corrigela y vuelve a intentarlo.");

    } else if (document.getElementById("checkbox1").checked === false) {
        matriculaTxt = document.getElementById("matricula").value;
        checkBox = document.getElementById("checkbox1").checked;

        ind = document.getElementById("documento").selectedIndex;
        yInd = document.getElementById("documento").options;
        opcionDocumento = yInd[ind].index;

        indC = document.getElementById("copias").selectedIndex;
        yIndC = document.getElementById("copias").options;
        copiasC = yIndC[indC].index + 1;

        indK = document.getElementById("copias2").selectedIndex;
        yIndK = document.getElementById("copias2").options;
        copiasK = yIndK[indK].index + 1;

        message = "";

        if (yInd[ind].index === 0) {
            message = createMessage(matriculaTxt, opcionDocumento, copiasC, 0, checkBox, 0, 0);
        } else if (yInd[ind].index === 1) {
            message = createMessage(matriculaTxt, opcionDocumento, 0, copiasK, checkBox, 0, 0);
        } else if (yInd[ind].index === 2) {
            message = createMessage(matriculaTxt, opcionDocumento, copiasC, copiasK, checkBox, 0, 0);
        }

        var mail = "mailto:nfc.dev.cita@gmail.com" + "?cc= " + "&subject=" + escape("Solicitud de documentos") + "&body=" + encodeURIComponent(message);

        window.location.href = mail;

    } else if (document.getElementById("checkbox1").checked === true) {
        matriculaTxt = document.getElementById("matricula").value;
        checkBox = document.getElementById("checkbox1").checked;

        ind = document.getElementById("documento").selectedIndex;
        yInd = document.getElementById("documento").options;
        opcionDocumento = yInd[ind].index;

        indC = document.getElementById("copias").selectedIndex;
        yIndC = document.getElementById("copias").options;
        copiasC = yIndC[indC].index + 1;

        indK = document.getElementById("copias2").selectedIndex;
        yIndK = document.getElementById("copias2").options;
        copiasK = yIndK[indK].index + 1;

        if (document.getElementById("copias").disabled == false && document.getElementById("copias2").disabled == true) {
            indCIng = document.getElementById("copiasIngCons").selectedIndex;
            yIndCIng = document.getElementById("copiasIngCons").options;
            copiasCIng = yIndCIng[indCIng].index + 1;
        } else if (document.getElementById("copias").disabled == true && document.getElementById("copias2").disabled == false) {
            indKIng = document.getElementById("copiasIngKard").selectedIndex;
            yIndKIng = document.getElementById("copiasIngKard").options;
            copiasKIng = yIndKIng[indKIng].index + 1;
        } else if (document.getElementById("copias").disabled == false && document.getElementById("copias2").disabled == false) {
            indCIng = document.getElementById("copiasIngCons").selectedIndex;
            yIndCIng = document.getElementById("copiasIngCons").options;
            copiasCIng = yIndCIng[indCIng].index + 1;

            indKIng = document.getElementById("copiasIngKard").selectedIndex;
            yIndKIng = document.getElementById("copiasIngKard").options;
            copiasKIng = yIndKIng[indKIng].index + 1;
        }

        message = "";

        if (yInd[ind].index === 0) {
            message = createMessage(matriculaTxt, opcionDocumento, copiasC, 0, checkBox, copiasCIng, 0);
        } else if (yInd[ind].index === 1) {
            message = createMessage(matriculaTxt, opcionDocumento, 0, copiasK, checkBox, 0, copiasKIng);
        } else if (yInd[ind].index === 2) {
            message = createMessage(matriculaTxt, opcionDocumento, copiasC, copiasK, checkBox, copiasCIng, copiasKIng);
        }

        var mail1 = "mailto:nfc.dev.cita@gmail.com" + "?cc= " + "&subject=" + escape("Solicitud de documentos") + "&body=" + encodeURIComponent(message);

        window.location.href = mail1;
    }

    resetValues();
}