       
          $( function() {
          	var contador=0;
            var auBien=new Audio("sonidos/ganador.mp3");
            var auMal=new Audio("sonidos/derrota.mp3");
          	
    $( "#cuadrado" ).draggable({revert: true,revert: function(valid){
       if(!valid){
          auMal.play();
          alert("error, observa bien las figuras");
          return true;
         }
    }});
    $( "#circulo" ).draggable({revert: true,revert: function(valid){
       if(!valid){
          auMal.play();
          alert("error, observa bien las figuras");
          return true;
         }
    }});
    $( "#triangulo" ).draggable({revert: true,revert: function(valid){
       if(!valid){
          auMal.play();
          alert("error, observa bien las figuras");
          return true;
         }
    }});
    $( "#trapecio" ).draggable({revert: true,revert: function(valid){
       if(!valid){
          auMal.play();
          alert("error, observa bien las figuras");
          return true;
         }
    }});

          $( "#cuadrado1" ).droppable({     	
      accept: "#cuadrado",
      drop: function( event, ui ) {
      	$("#cuadrado").hide();
        $("#cuadrado1").css("background-color", "green");
        contador++; 
        if(contador==4){
           auBien.play();
           alert("Enhorabuena, lo as consegido, pulsa reiniciar el juego para volverlo a intentar.");
           
         }
      } });
  
       $( "#circulo1" ).droppable({
      accept: "#circulo",
      drop: function( event, ui ) {
      	$("#circulo").hide();
        $("#circulo1").css("background-color", "red");
          contador++; 
       if(contador==4){
            auBien.play();
           alert("Enhorabuena, lo as consegido, pulsa reiniciar el juego para volverlo a intentar.");
           
         }
      } });

      $( "#triangulo1" ).droppable({
      accept: "#triangulo",
      drop: function( event, ui ) {
      	$("#triangulo").hide();
        $("#triangulo1").css("borderBottomColor", "yellow");
          contador++; 
         if(contador==4){
          auBien.play();
           alert("Enhorabuena, lo as consegido, pulsa reiniciar el juego para volverlo a intentar.");
           
         }
      } });

       $( "#trapecio1" ).droppable({
      accept: "#trapecio",
      drop: function( event, ui ) {
      	$("#trapecio").hide();
        $("#trapecio1").css("borderBottomColor", "blue");
          contador++; 
        if(contador==4){
          auBien.play();
           alert("Enhorabuena, lo as consegido, pulsa reiniciar el juego para volverlo a intentar.");

         }
      } });
      
       $('#boton').click(function() {
            location.reload();
        });

      

  } );
