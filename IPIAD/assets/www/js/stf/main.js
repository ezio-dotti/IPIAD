
// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
    

    $(".BtnEsci").click(function () {
        navigator.app.exitApp();
    });
    

    $.mobile.loading('show', {
        text: 'Sto caricando la tua posizione. Attendi !!!',
        textVisible: true,
        theme: 'z',
        html: ""
    });
}