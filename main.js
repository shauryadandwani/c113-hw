
function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();


}
function draw() {
    circle(0, 0, 20);
    rect(15, 0, 55, 55);
}