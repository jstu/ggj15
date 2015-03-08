function preload() {
    bg = loadImage("/ggj15/images/8_fossile.png");
    song = loadSound("/ggj15/music/dandt.mp3");
}
 
function draw() {
    zoomHandler();
    nextLvlButton(width/2 - 65, height/2 - 60, 70, 70, "/ggj15/levels/whatwasit");
}
