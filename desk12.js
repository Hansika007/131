img = "";
 
function preload()
{
    img = loadImage("desk.img.jpg");
}

function setup()
{
    canvas = createCanvas(640 , 440);
    canvas.center();
    objectDetector =ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML= "Status : Object Detecting";

}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Desk", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );
}
  