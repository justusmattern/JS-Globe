function setup(){
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    

}

function draw(){
    translate(500,0,0);
    fill('blue');
    sphere(50);

}

function mouseClicked(){
    v = screenPosition(500,0,0);
    console.log(v.x);
    console.log(mouseX);
}