let earthTexture;
            let backgroundImg;
            let horAngle;
            let verAngle;
            let initX;
            let initY;
            let r;
            let difX;
            let difY;
            let zoomIn = false;
            let zoomOut = false;
            const earthRadius = window.innerHeight*0.32;


function setup(){

    verAngle = 0;
    horAngle = PI;
    r = 2*(window.innerHeight/2)/tan(PI/6);
    backgroundImg = loadImage('/images/2k_stars.jpg');
    earthTexture = loadImage('/images/8k_earth.jpg');
    cnv = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    cnv.parent('wrapper');
    
}

function draw(){
    if(zoomIn == true && r > window.innerHeight*0.42*2){
        r -= 2;
    }
    if(zoomOut == true && r < window.innerHeight*3){
        r += 2;
    }
    camera(r*sin(horAngle)*cos(verAngle), r*sin(verAngle), r*cos(horAngle)*cos(verAngle), 0,0,0,0,1,0);
    texture(backgroundImg);
    box(window.innerWidth*5,window.innerHeight*5,10000);
    fill(50);
    noStroke();
    texture(earthTexture);
    sphere(earthRadius*2);
    
    showISS();
}

var intervalId;
$("#buttonRight").mousedown(function() {
            intervalId = setInterval(rotateRight, 1);
}).mouseup(function() {
  clearInterval(intervalId);
});
$("#buttonLeft").mousedown(function() {
            intervalId = setInterval(rotateLeft, 1);
}).mouseup(function() {
  clearInterval(intervalId);
});
$("#buttonUp").mousedown(function() {
            intervalId = setInterval(rotateUp, 1);
}).mouseup(function() {
  clearInterval(intervalId);
});
$("#buttonDown").mousedown(function() {
            intervalId = setInterval(rotateDown, 1);
}).mouseup(function() {
  clearInterval(intervalId);
});
$("#buttonZoomIn").mousedown(function() {
    zoomIn = true;
}).mouseup(function() {
    zoomIn = false;
});
$("#buttonZoomOut").mousedown(function() {
    zoomOut = true;
}).mouseup(function() {
  zoomOut = false;
});



function rotateRight(){
    horAngle += 0.003;
}
function rotateLeft(){
    horAngle -= 0.003;
}
function rotateUp(){
    if(verAngle > -0.5*PI+0.0031){
    verAngle -= 0.003;
    }
}
function rotateDown(){
    if(verAngle < 0.5*PI - 0.0021)
    verAngle += 0.003;
}


function showISS(){
  let log = PI + 0.0174533 * '<%= longitude %>';
  let lat = 0.0174533 * '<%= latitude %>';

  alt = earthRadius * (1 + 408/6371);

  push();// begin motion
  translate(alt*sin(log)*cos(lat),alt*sin(lat),alt*cos(log)*cos(lat));
  noFill();
  sphere(1000);
  pop();
}


