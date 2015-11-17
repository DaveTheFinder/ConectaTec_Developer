/** Created by davidsaenz sometime between mid-2015. */

function createMessage(dataMatr, dataOpt, dataCopiasC, dataCopiasK, dataCheck, englishC, englishK) {

    var messageCopyC = "",
        messageCopyK = "",
        messageIdiom = "",
        finalMessage = "",
        farewellMessage = "\n\n¡Muchas gracias!";

    switch (dataOpt) {
    case 0:
        {
            if (dataCopiasC === 1) {
                messageCopyC = "Hola.\n\n Quisiera solicitar 1 constancia de estudios, por favor. ";
            } else if (dataCopiasC === 2) {
                messageCopyC = "Hola.\n\n Quisiera solicitar 2 constancias de estudios, por favor. ";
            } else if (dataCopiasC === 3) {
                messageCopyC = "Hola.\n\n Quisiera solicitar 3 constancias de estudios, por favor. ";
            }

            if (dataCheck === true && (dataCopiasC == 1 && englishC == 1)) {
                messageIdiom = "Y que la constancia esté en inglés. ";
            } else if (dataCheck === true && (dataCopiasC != 1 && englishC == 1)) {
                messageIdiom = "Y que 1 sea en inglés.\n";
            } else if (dataCheck === true && englishC === dataCopiasC) {
                messageIdiom = "Y que las " + englishC + " sean en inglés.\n";
            } else if (dataCheck === true && englishC != 1) {
                messageIdiom = "Y que " + englishC + " constancias sean en inglés. ";
            } else {
                messageIdiom = "";
            }
            var messageMatricula = "\nMi matrícula es: A" + dataMatr + " ";

            return finalMessage = messageCopyC + messageIdiom + messageMatricula + farewellMessage;
        }

    case 1:
        {
            if (dataCopiasK === 1) {
                messageCopyK = "Hola.\n\n Quisiera solicitar 1 Kardex, por favor. ";
            } else if (dataCopiasK === 2) {
                messageCopyK = "Hola.\n\n Quisiera solicitar 2 Kardex, por favor. ";
            } else if (dataCopiasK === 3) {
                messageCopyK = "Hola.\n\n Quisiera solicitar 3 Kardex, por favor. ";
            }

            if (dataCheck === true && (dataCopiasK == 1 && englishK == 1)) {
                messageIdiom = "Y que el Kardex esté en inglés. ";
            } else if (dataCheck === true && (dataCopiasK != 1 && englishK == 1)) {
                messageIdiom = "Y que 1 sea en inglés.\n";
            } else if (dataCheck === true && englishK === dataCopiasK) {
                messageIdiom = "Y que los " + englishK + " sean en inglés.\n";
            } else if (dataCheck === true && englishK != 1) {
                messageIdiom = "Y que " + englishK + " Kardex sean en inglés. ";
            } else {
                messageIdiom = "";
            }
            messageMatricula = "\nMi matrícula es: A" + dataMatr + " ";

            return finalMessage = messageCopyK + messageIdiom + messageMatricula + farewellMessage;
        }

    case 2:
        {
            var messageDoc = "Hola.\n\n Quisiera solicitar documentos de constancia de estudios y Kardex, por favor. ";
            if (dataCopiasC === 1) {
                messageCopyC = "Sería 1 constancia de estudios, ";
            } else if (dataCopiasC === 2) {
                messageCopyC = "Serían 2 constancias de estudio, ";
            } else if (dataCopiasC === 3) {
                messageCopyC = "Serían 3 constancias de estudio, ";
            }

            if (dataCopiasK === 1) {
                messageCopyK = "y un 1 Kardex. ";
            } else if (dataCopiasK === 2) {
                messageCopyK = "y 2 Kardex. ";
            } else if (dataCopiasK === 3) {
                messageCopyK = "y 3 Kardex. ";
            }

            if (dataCheck === true && dataCopiasC == 1 && dataCopiasK == 1) {
                messageIdiom = "Y que ambos sean en inglés. ";
            } else if (dataCheck === true && englishC === 1) {
                messageIdiom = "Y que " + englishC + " constancia y " + englishK + " Kardex sean en inglés. ";
            } else if (dataCheck === true) {
                messageIdiom = "Y que " + englishC + " constancias y " + englishK + " Kardex sean en inglés. ";
            } else {
                messageIdiom = "";
            }
            messageMatricula = "\n\nMi matrícula es: A" + dataMatr + " ";

            return finalMessage = messageDoc + messageCopyC + messageCopyK + messageIdiom + messageMatricula + farewellMessage;
        }

    default:
        {
            return finalMessage = "-Default return-";
        }
    }
}

function confirmMessage(dataMatr, dataOpt, dataCopiasC, dataCopiasK, dataCheck, englishC, englishK) {

    var messageCopyC = "",
        messageCopyK = "",
        messageIdiom = "",
        finalMessage = "",
        farewellMessage = "¿Es correcto?";

    switch (dataOpt) {
    case 0:
        {
            if (dataCopiasC === 1) {
                messageCopyC = "- 1 constancia de estudios.\n";
            } else if (dataCopiasC === 2) {
                messageCopyC = "- 2 constancias de estudios.\n";
            } else if (dataCopiasC === 3) {
                messageCopyC = "- 3 constancias de estudios.\n";
            }

            if (dataCheck === true && (englishC === 1 && copiasC === 1)) {
                messageIdiom = "- En Inglés.\n";
            } else if (dataCheck === true && englishC === 1) {
                messageIdiom = "- Que 1 sea en inglés.\n";
            } else if (dataCheck === true && englishC === copiasC) {
                messageIdiom = "- Que las " + englishC + " sean en inglés.\n";
            } else if (dataCheck === true && englishC != 1) {
                messageIdiom = "- Que " + englishC + " sean en inglés.\n";
            } else {
                messageIdiom = "";
            }

            var messageMatricula = "- Tu matrícula es: A" + dataMatr + "\n\n";

            return finalMessage = messageCopyC + messageIdiom + messageMatricula + farewellMessage;
        }

    case 1:
        {
            if (dataCopiasK === 1) {
                messageCopyK = "- 1 Kardex.\n";
            } else if (dataCopiasK === 2) {
                messageCopyK = "- 2 Kardex.\n";
            } else if (dataCopiasK === 3) {
                messageCopyK = "- 3 Kardex.\n";
            }

            if (dataCheck === true && (englishK === 1 && copiasK === 1)) {
                messageIdiom = "- En Inglés.\n";
            } else if (dataCheck === true && englishK === 1) {
                messageIdiom = "- Que 1 sea en inglés.\n";
            } else if (dataCheck === true && englishK === copiasK) {
                messageIdiom = "- Que las " + englishK + " sean en inglés.\n";
            } else if (dataCheck === true && englishK != 1) {
                messageIdiom = "- Que " + englishK + " sean en inglés.\n";
            } else {
                messageIdiom = "";
            }

            messageMatricula = "- Tu matrícula es: A" + dataMatr + "\n\n";

            return finalMessage = messageCopyK + messageIdiom + messageMatricula + farewellMessage;
        }

    case 2:
        {
            if (dataCopiasC === 1) {
                messageCopyC = "- 1 constancia de estudios.\n";
            } else if (dataCopiasC === 2) {
                messageCopyC = "- 2 constancias de estudios.\n";
            } else if (dataCopiasC === 3) {
                messageCopyC = "- 3 constancias de estudios.\n";
            }

            if (dataCopiasK === 1) {
                messageCopyK = "- 1 Kardex.\n";
            } else if (dataCopiasK === 2) {
                messageCopyK = "- 2 Kardex.\n";
            } else if (dataCopiasK === 3) {
                messageCopyK = "- 3 Kardex.\n";
            }

            if (dataCheck === true && englishK === copiasK && englishC === copiasC) {
                messageIdiom = "- Todos en inglés.\n";
            } else if (dataCheck === true) {
                messageIdiom = "- De esos: " + englishC + " constancias y " + englishK + " Kardex son en inglés.\n";
            } else {
                messageIdiom = "";
            }

            messageMatricula = "- Tu matrícula es: A" + dataMatr + "\n\n";

            return finalMessage = messageCopyC + messageCopyK + messageIdiom + messageMatricula + farewellMessage;
        }

    default:
        {
            return finalMessage = "Falta algo.";
        }
    }
}