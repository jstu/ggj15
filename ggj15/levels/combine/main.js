function preload() {
	bg = loadImage("/ggj15/images/2_combine.png");
	song = loadSound("/ggj15/music/dandt.mp3");
}

function draw() {
    zoomHandler();
    nextLvlButton(width/2 + 255, height/2 - 30, 105, 40, "whatnow/choose.html");
}

