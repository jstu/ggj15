function preload() {
    bg = loadImage("/ggj15/images/9_alice.png");
    speechBubble = loadImage("/ggj15/images/9_bubble.png");
    song = loadSound("/ggj15/music/dandt.mp3");
}

function draw() {
    zoomHandler();
    nextLvlButton(width/2 - 20, height/2 - 120, 35, 35, "/ggj15/levels/end");
    speechBubbleTrigger(width/2 - 20, height/2 - 120, 35, 35);
}
