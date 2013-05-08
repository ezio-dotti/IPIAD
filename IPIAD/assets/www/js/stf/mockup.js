function GetPiadinerie(latitudine, longitudine, callbackFunction) {
    var arrayPiadinerie = [];

    for (var i = 0; i < 10; i++) {
        var piadineria = new Piadineria(i, "Citt&agrave; " + i, "Indirizzo " + i, "Lat " + i, "Long " + i, "Provincia " + i, "Piadineria n. " + i, "Regione " + i, i * 10, i * 5);
        arrayPiadinerie.push(piadineria);
    }
    GlobalPiadinerie = arrayPiadinerie;

    callbackFunction();
}