var glifos;
var numerito = {
    'a': 4, 'b': 14, 'c': 9, 'd': 6, 'e': 1, 'f': 13, 'g': 12, 'h': 15, 'i': 7, 'j': 3, 'k': 16, 'l': 17, 'm': 11, 'n': 2, 'o': 10, 'p': 18, 'q': 19, 'r': 5, 's': 8, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26, 'ñ': 27
}
var solucion = 'enjardinardescompasdiantredolagedogresolo';
$(document).ready(function () {

    $.ajax({
        url: 'glifos.json',
        dataType: 'json',
        success: function (datos) {
            glifos = datos;
            $(document).ready(function () {
                var contador = 0;
                for (let j = 0; j < 7; j++) {

                    $('#content').append('<div id="' + j + '" class="row my-1"></div>');

                    for (i = j; i < 10; i++) {
                        contador++;
                        let letrita = glifos[j].solucion.split("");
                        $('#' + j).append('<div class="all d-inline text-center">\
                                            <p id="' + (contador + 50) + '" class="text-center">' + numerito[letrita[i - j]] + '</p>\
                                            <input id="' + (contador + 100) + '" onchange="juego(this.value, this.id)" class="boton"></div></div>');
                    }

                    $('#content').append('<p class="text-left">' + glifos[j].pista + '</p>');

                }
            });
        }
    });
});

let juego = function (letrilla, id) {
    var numeraso = document.getElementById(id - 50).innerText;
    for (i = 51; i < 100; i++) {
        if (document.getElementById(i).innerText == numeraso) {
            document.getElementById(i + 50).value = letrilla;
        }
    }
    comprobar();
}
let comprobar = function () {

}