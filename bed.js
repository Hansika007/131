img = "";
 
function preload()
{
    img = loadImage("bed.img.jpg");
}

function setup()
{
    canvas = createCanvas(640 , 440);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );
}
  