var button1 = document.getElementById('fav1'),
  contador1 = 0;
button1.onclick = function() {
  contador1 += 1;
  button1.innerHTML = "Me gustas " + contador1;
};
var button2 = document.getElementById('fav2'),
  contador2 = 0;
button2.onclick = function() {
  contador2 += 1;
  button2.innerHTML = "Me gustas " + contador2;
};
var button = document.getElementById('fav'),
  contador3 = 0;
button.onclick = function() {
  contador3 += 1;
  button.innerHTML = "Me gustas " + contador3;
};

$('.cookie').on('click', function(){
$('.cookie').css('display','none')
});
