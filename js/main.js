//var currentScale = 1;
//var scaleDirection = 0.01;
//
//function setup() { 
//  createCanvas(windowWidth, windowHeight);
////    fullScreen(true);
//	
//} 

//function draw() { 
//	if(currentScale > 5){
//		scaleDirection = -0.01;
//	}
//	else if(currentScale < 0.5){
//		scaleDirection = 0.01;
//	}
//	
//	currentScale = currentScale + scaleDirection;
//	
//  // background(220);
//  clear();
//	translate(windowWidth/2, windowHeight/2);
//	scale(currentScale);
//	translate(-50, -50);
//  // noStroke();
//    strokeWeight(4);
//  stroke(0, 0, 0);
//  fill(0,100,0);
////	triangle(30, 75, 58, 20, 86, 75);
//    triangle(30 - 100, 75, 58 - 100, 20, 86 -100, 75);
//    triangle(30 + 100, 75, 58 + 100, 20, 86 + 100, 75);
////  triangle(30+50, 75+50, 58+50, 20+50, 86+50, 75+50);
////  triangle(30-50, 75-50, 58-50, 20-50, 86-50, 75-50);
////    triangle(80-100, 125, 108-100, 70, 136-100, 125);
////    triangle(30+50, 75+50-100, 58+50, 20+50-100, 86+50, 75+50-100);
//    
//
//  
//	// triangle(30, 75, 58, 20, 86, 75);
//}



//audiosample

//clickplaybutton

var playIcon = document.getElementById("playicon");
var player = new Tone.Player("https://res.cloudinary.com/dvwvkt7iq/video/upload/v1508793511/Little_Sound_Dancehall_ofwppl.mp3");





//
playIcon.addEventListener("click",function(){

  if (player.state === "started") {
    player.stop();
    document.getElementById("dancehall").className = " " ;
    document.getElementById("playicon").src = "img/playpause.png";
  }

  else {
    document.getElementById("dancehall").className = " playing" ;
    document.getElementById("playicon").src = "img/playpauseon.png";
    player.autostart = true;
    player.toMaster();

    player.start();
  }

});



////animation graphics



 console.log("working");