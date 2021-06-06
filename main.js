window.onload = function() {
 clock();

 function clock() {
  var now = new Date();
  var TwentyFourHour = now.getHours();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var mid = 'pm';
  if (min < 10) {
   min = "0" + min;
  }
  if (hour > 12) {
   hour = hour - 12;
  }
  if (hour == 0) {
   hour = 12;
  }
  if (TwentyFourHour < 12) {
   mid = 'am';
  }
  document.getElementById('time', ).innerHTML = hour + ':' + min;
  setTimeout(clock, 1000);
  document.getElementById('locktime', ).innerHTML = hour + ':' + min;
  setTimeout(clock, 1000);
 }
 document.getElementById("now").addEventListener("click", function() {
  var cO = document.getElementById("cardOne");
 
  cO.style.left = "-500px";
 
 });
 document.getElementById("msclr").addEventListener("click", function() {
 
  var tO = document.getElementById("cardTwo");
 
  tO.style.left = "-500px";
 });
}