/**
 * Created by davidsaenz on 13/10/15.
 */

function resetValues() {
    var documentos = document.getElementById("documento");
    var copiasC = document.getElementById("copias");
    var copiasK = document.getElementById("copias2");
    var checkboxIdiom = document.getElementById("checkbox1");
    var matricula = document.getElementById("matricula");
    var copiasDefaultSet = document.getElementById("copias2");
    var h1, h2;

    documentos.selectedIndex = 0;
    copiasC.selectedIndex = 0;
    copiasK.selectedIndex = 0;
    checkboxIdiom.checked = false;
    matricula.value = "";
    copiasDefaultSet.disabled = true;

    if (document.getElementById("insideDiv") && document.getElementById("insideDiv2")) {
        h1 = document.getElementById("insideDiv");
        h2 = document.getElementById("insideDiv2");
        h1.remove(h1);
        h2.remove(h2);
    } else if (document.getElementById("insideDiv")) {
        h1 = document.getElementById("insideDiv");
        h1.remove(h1)
    } else if (document.getElementById("insideDiv2")) {
        h2 = document.getElementById("insideDiv2");
        h2.remove(h2);
    }
}