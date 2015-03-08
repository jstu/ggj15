function preload() {
    bg = loadImage("/ggj15/images/6_AbbeyRoad.png");
    speechBubble = loadImage("/ggj15/images/6_MusicBubble.png");
    song = loadSound("/ggj15/music/dandt.mp3");
}

function draw() {

    zoomHandler();

    nextLvlButton(width/2 + 35, height/2 - 130, 80, 300, "/ggj15/levels/read");
    speechBubbleTrigger(width/2 + 35, height/2 - 130, 80, 300);
}
