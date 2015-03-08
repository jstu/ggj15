function preload() {
    bg = loadImage("/ggj15/images/10_final.png");
    speechBubble = loadImage("/ggj15/images/10_bubble.png");
    song = loadSound("/ggj15/music/final.mp3");

}
 
function draw() {
    zoomHandler();
    image(speechBubble, width/2 + 75, height/2 - 95, 150,150);
    nextLvlButton(0, 0, width, height, "/ggj15/index.html");

}
