/*var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("header").style.top = "0";
  } else {
    document.getElementByClassName("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}*/
var preu = 0;

function close() {
  document.getElementById('post').innerHTML=''; 
  document.getElementById('post').style.height = '0px'; 
  document.getElementById('s1').style.marginTop = '100px'; 
  document.getElementById('descobreix_div').style.top = '1230px';
  document.getElementById('post_header_x-square').style.display = 'none';
}

function preus() {
  if (preu == 0){
    document.getElementById('preus').style.borderColor = 'orangered';
    document.getElementById('preus').style.color = 'orangered';
    document.getElementById('sub1').style.display = 'block';
    document.getElementById('sub2').style.display = 'block';
    document.getElementById('sub3').style.display = 'block';
    document.getElementById('sub4').style.display = 'block';
    document.getElementById('sub5').style.display = 'block';
    document.getElementById('sub6').style.display = 'block';
    document.getElementById('sub7').style.display = 'block';
    document.getElementById('sub8').style.display = 'block';
    document.getElementById('sub9').style.display = 'block';
    preu = 1;
  }
  else if (preu == 1){
    window.location.reload();
  }
  
}