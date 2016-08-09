
var g_backgroundImgFolded = null;

$(document).ready(function(){
    g_backgroundImgFolded = new OriDomi('.cDiv_BackgroundImg', {
                                            vPanels:         8,     // number of panels when folding left or right (vertically oriented)
                                            hPanels:         5,     // number of panels when folding top or bottom
                                            speed:           1200,  // folding duration in ms
                                            ripple:          2,     // backwards ripple effect when animating
                                            shadingIntesity: .5,    // lessen the shading effect
                                            perspective:     800,   // smaller values exaggerate 3D distortion
                                            maxAngle:        40,    // keep the user's folds within a range of -40 to 40 degrees
                                            shading:         'soft' // change the shading type
                                        });
    foldBackgroundImg();
});

function foldBackgroundImg(){
    g_backgroundImgFolded.stairs(17, "top");
}

function hideBackgroundImg(){
    g_backgroundImgFolded.unfold(function(){
        g_backgroundImgFolded.foldUp("top", function(){
            $(".cDiv_BackgroundImg").hide();
            $(".cDiv_MenuBar").show();
        });
    });
}