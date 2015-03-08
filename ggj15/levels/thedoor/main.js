var bg_lights;
var bg_nolights;
var lights;

function preload() {
    bg_lights = loadImage("/ggj15/images/1_door_first.png");
    bg_nolights = loadImage("/ggj15/images/1_door_second.png");

    song = loadSound("/ggj15/music/dandt.mp3");
    speechBubble = loadImage("/ggj15/images/1_bubble.png");
}
 
function draw() {
    lights = getURLParameter('lights');
    lights = lights.toLowerCase();

    if(lights == "off") {
        bg = bg_nolights;
    }else
        bg = bg_lights;

    zoomHandler();

    nextLvlButton(width/2 - 85, height/2 - 20, 55, 20, "/ggj15/levels/combine/primarycolors.html");
    speechBubbleTrigger(width/2 - 85, height/2 - 20, 55, 20);
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

