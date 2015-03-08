function preload() {
    bg = loadImage("/ggj15/images/7_viikinki.png");
    song = loadSound("/ggj15/music/dandt.mp3");
    speechBubble = loadImage("/ggj15/images/7_VikingBubble.png");
}

function draw() {
    zoomHandler();
    nextLvlButton(width/2 + 195, height/2 - 130, 180, 180, "/ggj15/levels/phi");
    speechBubbleTrigger(width/2 + 195, height/2 - 130, 180, 180);
}
