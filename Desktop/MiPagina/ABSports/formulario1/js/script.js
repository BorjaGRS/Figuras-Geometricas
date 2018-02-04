
document.getElementsByClassName('email')[0].addEventListener('keyup', function() {
    campo = document.getElementsByClassName('email')[0].value;    
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(campo)) {
       document.getElementsByClassName('email')[0].setCustomValidity("");
       
    } else {
      document.getElementsByClassName('email')[0].setCustomValidity("Este es el formato de email: abcd@abcd.abc"); 
    }
});
document.getElementsByClassName('contrasena')[0].addEventListener('keyup', function() {
    campo = document.getElementsByClassName('contrasena')[0].value;   
    emailRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

    if (emailRegex.test(campo)) {
        document.getElementsByClassName('contrasena')[0].setCustomValidity("");
        
    } else {
      document.getElementsByClassName('contrasena')[0].setCustomValidity("Para que sea válida debe tener al menos ocho caracteres y contener al menos una letra minúscula, una mayúscula, un número y un símbolo");
      
    }
});

document.getElementsByClassName('confirma')[0].addEventListener('keyup', function() {
    confirma = document.getElementsByClassName('confirma')[0].value;    
    contrasena = document.getElementsByClassName('contrasena')[0].value;
    
    if (confirma==contrasena) {
       document.getElementsByClassName('confirma')[0].setCustomValidity("");
       
    } else {
      document.getElementsByClassName('confirma')[0].setCustomValidity("Las contraseñas no coinciden."); 
    }
});


$('.logeo').on('click', function(){
  $('.conten').css('display','none');
  $('.conten1').css('display','unset');
});
$('.suscrip').on('click', function(){
  $('.conten').css('display','unset');
  $('.conten1').css('display','none');
});




$('.dir').on('keyup', function(){
  var dir = document.getElementsByClassName('dir')[0].value;
  

  if(dir!=''){
    $('.tar').css('display','unset');
  }else{
    $('.tar').css('display','none');
  }

});


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  if(exdays){
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
  }else {
    var expires='';
  }
  document.cookie = "Nombre: "+ cname + "," + "Contraseña: "+ cvalue + ";" + expires + ";path=/";
}



function getCookie(nombre,con) {
   var lista = document.cookie.split(";");
         for (i in lista) {
             var busca = lista[i].search("Nombre: "+ nombre + "," + "Contraseña: "+ con);
             if (busca > -1) { 
              return alert("Bienvenido "+nombre);

            }
             else{alert("El Nombre o la contraseña estan mal introducidos, pruebe de nuevo a rellenar los campos")} 
             }

   
  
      }

