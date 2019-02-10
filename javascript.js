var glifos;


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
                        var numerito
                        for(i = 0 ; numerito ){

                        }
                        $('#'+j).append('<div class="all d-inline text-center"><p id="'+(contador+50)+'" class="text-center">'+numerito+'</p><input class="boton"></div></div>');
                    }

                    $('#content').append('<p class="text-left">' + glifos[j].pista + '</p>');

                }
                $("input").on('keyup', function(){
                }).keyup();
            });
        }
    });
});