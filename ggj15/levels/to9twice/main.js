function preload() {
    bg = loadImage("/ggj15/images/4_bc.png");
    song = loadSound("/ggj15/music/dandt.mp3");
}

function draw() {
    zoomHandler();
    nextLvlButton(width/2 - 85, height/3 - 50, 150, 200, "/ggj15/levels/namesake");
}
