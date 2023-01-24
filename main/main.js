/*ANUNCI INDEX*/
function close() {
  document.getElementById('post').innerHTML=''; 
  document.getElementById('post').style.height = '0px'; 
  document.getElementById('s1').style.marginTop = '100px'; 
  document.getElementById('descobreix_div').style.top = '1230px';
  document.getElementById('post_header_x-square').style.display = 'none';
}



/*PREUS APARTATS DONA, HOME I NEN/A*/
var preu = 0;
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


/*SLIDE UBICACIÓ*/
let index = 0;


function showSlides() {
  
  document.getElementById('mySlides1').style.display = 'none';  
  document.getElementById('mySlides2').style.display = 'none';  
  document.getElementById('mySlides3').style.display = 'none';  
  document.getElementById('mySlides4').style.display = 'none';  

  index++;
  if (index > 4) {index = 1}
  
  if (index == 1){
    document.getElementById('mySlides1').style.display = 'block';  
  }
  else if (index == 2){
    document.getElementById('mySlides2').style.display = 'block';  
  }
  else if (index == 3){
    document.getElementById('mySlides3').style.display = 'block';  
  }
  else {
    document.getElementById('mySlides4').style.display = 'block';  
  }

  setTimeout(showSlides, 2000); 
}