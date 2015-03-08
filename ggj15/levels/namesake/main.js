function preload() {
    bg = loadImage("/ggj15/images/5_egypti.png");
    song = loadSound('/ggj15/music/beethoven.mp3');
}

function draw() {
    zoomHandler();
    nextLvlButton(width/2 + 10, height/2 , 60, 15, "/ggj15/levels/legends");
}
