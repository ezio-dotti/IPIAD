
// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

function Coordinate(latitudine, longitudine) {
    this.Latitudine = latitudine;
    this.Longitudine = longitudine;
}

function Piadineria(code, city, address, latitude, longitude, province, ragioneSociale, region,distance,duration) {
    this.code = code;
    this.city = city;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.province = province;
    this.ragioneSociale = ragioneSociale;
    this.region = region;
    this.distance = distance;
    this.duration = duration;
}

var GlobalPiadinerie = new Array();
var _PiadineriaRow = '<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="c" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c"><a href="#dettaglioPiadineria" class="ui-link-inherit"><p class="ui-li-aside ui-li-desc"><strong>[distance]</strong> km <br />Percorrenza: <strong>[duration]</strong> min</p><h3 class="ui-li-heading">[ragioneSociale]</h3><p class="ui-li-desc"><strong>[address], [city]</strong></p></a></li>';


// Cordova is ready
//

function onError(error) {
    alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
}

function GetPiadinerie(latitudine, longitudine, callbackFunction) {
    var arrayPiadinerie = [];

    for (var i = 0; i < 10; i++) {
        var piadineria = new Piadineria(i, "Città " + i, "Indirizzo " + i, "Lat " + i, "Long " + i, "Provincia " + i, "Piadineria " + i, "Regione " + i,i*10,i*5);
        arrayPiadinerie.push(piadineria);
    }
    GlobalPiadinerie = arrayPiadinerie;

    callbackFunction();
}

function LoadPiadinerie() {

    var content = "";
    
    for (var i = 0; i <= GlobalPiadinerie.length - 1; i++) {
        var piad = GlobalPiadinerie[i];
        content += _PiadineriaRow
            .replace("[distance]", piad.distance)
            .replace("[duration]", piad.duration)
            .replace("[ragioneSociale]", piad.ragioneSociale)
            .replace("[city]", piad.city)
            .replace("[address]", piad.address);
    }

    $('#listapiadinerie').html(content);
    $.mobile.changePage("#piadinerie", { transition: "slideup", changeHash: false });
}

function Init() {

    $.mobile.changePage("#localizzazione", { transition: "slideup", changeHash: false });

    $.mobile.loading('show', {
        text: 'Sto caricando la tua posizione. Attendi !!!',
        textVisible: true,
        theme: 'z',
        html: ""
    });

    navigator.geolocation.getCurrentPosition(
        function (position) {

            GetPiadinerie(position.coords.latitude, position.coords.longitude, function () { LoadPiadinerie(); });
           
        },
        onError);

}

function onDeviceReady() {

    $(".BtnEsci").click(function () {
        navigator.app.exitApp();
    });

    $(".BtnInit").click(function () {
        Init();
    });

    Init();
}