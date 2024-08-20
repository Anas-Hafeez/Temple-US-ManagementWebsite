
var images=['IMAGES/Screenshot (4).png','IMAGES/Screenshot (5).png','IMAGES/Screenshot (6).png','IMAGES/Screenshot (7).png','IMAGES/Screenshot (8).png']
var i=0;

function changeImage()
{
  var x=document.getElementById('A');
  x.src=images[i];
  i++;
  if(i==images.length)
  {
    i=0;
  }
  setTimeout(changeImage,2000);


 }
