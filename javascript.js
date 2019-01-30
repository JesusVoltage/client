var glifos;

$(document).ready(function(){

    $.ajax({
        url: 'glifos.json',
        dataType: 'json',
        success: function(datos){
            glifos = datos;
            $( document ).ready(function() {

                for(j = 0  ; j < 7 ; j++){
                    
                    for(i = j ; i < 10 ; i++ ){
                        $('#content').append('<input class="boton"></input>');
                        
                        
                        
                        
                    }
                    $('#content').append('<p>'+glifos[j].pista+'</p>');
                }
            });
        }
    });
});


var contador = 0;

