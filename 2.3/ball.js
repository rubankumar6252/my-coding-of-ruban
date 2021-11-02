//Set global variable that would contain the position, velocity and the html element "ball"

var positionX = 0;
var positionY = 0;
var velocity = 50;
var reverse=true
var ball=document.getElementById('ball');
//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var xmin =0;
  var xmax =500;
  if(reverse ===true){
    positionX=positionX velocity;
    ball.style.left=positionX +"px";
    positionY=positionY velocity;
    ball.style.top=positionY +"px";
    if(positionX >=xmax)
    {
      reverse=false;
    }
  }
  else{
    positionX=positionX velocity;
    ball.style.left=positionX +"px";
    positionY=positionY velocity;
    ball.style.top=positionY +"px";
    if(positionX==xmin)
    {
      reverse=true;
    }
  }
 
  
}
// This call the moveBall function every 100ms
setInterval(moveBall, 100);