var glifos;
var numerito = {
    'a': 16,'b': 15,'c': 14,'d': 17,'e': 13,'f': 18,'g': 12,'h': 19,'i': 11,'j': 20,'k': 10,'l': 21,'m': 9,'n': 8,'o': 7,'p': 6,'q': 5,'r': 4,'s': 3,'t': 2,'u': 1,'v': 21,'w': 25,'x': 22,'y': 24,'z': 23, 'ñ':26
}


$(document).ready(function () {

    $.ajax({
        url: 'glifos.json',
        dataType: 'json',
        success: function (datos) {
            glifos = datos;
            $(document).ready(function () {
                var contador = 0;
                for (let j = 0; j < 7; j++) {
                    
                    $('#content').append('<div id="'+j+'" class="row my-1"></div>');

                    for (i = j; i < 10; i++) {
                        contador++;
                        console.log(contador);
                        let letrita = glifos[j].solucion.split("");
                        //let numerito = letraNumero(letrita[i-j]);
                        $('#'+j).append('<div class="all d-inline text-center"><p id="'+(contador+50)+'" class="text-center">'+numerito[letrita[i-j]]+'</p><input class="boton"></div></div>');
                    }

                    $('#content').append('<p class="text-left">' + glifos[j].pista + '</p>');

                }
                $("input").on('keyup', function(){
                    var value = $(this).val();
                    console.log(numerito[value]);
                }).keyup();
            });
        }
    });
});