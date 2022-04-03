/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var image_tracker="f";
function change(){

  var image = document.getElementById('foto');
  if (image_tracker == 'f')
   {
     image.src='img/22.jpg';
   image_tracker='t';  
}
else{
  image.src='img/21.webp';
  image_tracker='f';
}

}

var image_tracker="q";
function changestyle(){

  var image = document.getElementById('foto1');
  if (image_tracker == 'q')
   {
     image.src='img/31.jpg';
   image_tracker='w';  
}
else{
  image.src='img/30.jpg';
  image_tracker='q';
}

}

var image_tracker="c";
function changeklik(){

  var image = document.getElementById('foto2');
  if (image_tracker == 'c')
   {
     image.src='img/41.jpg';
   image_tracker='s';  
}
else{
  image.src='img/40.jpg';
  image_tracker='c';
}

}

function changeText (){

var username = 'cadigashi';
var password = '123';

var userName = document.getElementById('username').value;
var passWord = document.getElementById('password').value;

if ((username == userName) && (password == passWord))
 {
  alert("Te dhenat jane shtuar me sukses");
 }

 else
 {
  alert(  "Gabimm!!");
 }
}
