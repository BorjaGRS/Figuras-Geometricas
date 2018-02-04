$(document).ready(function(){

  //evento clic de la flecha izquierda
  $('#Izquierda').click(function(){
    //tomamos el ultimo elemento de la lista y lo colocamos en la ultima posicion
    $('#Centro ul').prepend($('#Centro ul li:last'));
  });
  
  //evento clic de la flecha derecha
  $('#Derecha').click(function(){
    //tomamos el primer elemento de la lista y lo trasladamos a la primera posicion
    $('#Centro ul').append($('#Centro ul li:first'));
  });
});