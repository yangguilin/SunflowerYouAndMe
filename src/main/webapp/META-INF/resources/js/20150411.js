
var g_imgUrlPrefix = "http://www.sunfloweryouandme.org/photo/20150411/";
var g_imgUrlSuffix = ".jpg";
var g_allImgNum = 125;

$(document).ready(function(){
    loadPicture();
});

function loadPicture(){
    var picData = "[";
    for (var i = 1; i <= g_allImgNum; i++){
        var imgIndex = getImgNameByIndex(i);
        var imgName = g_imgUrlPrefix + imgIndex + g_imgUrlSuffix;
        picData += '{"img":"' + imgName + '", "caption":"' + imgIndex + '"},';
    }
    picData = removeLastWord4String(picData) + "]";
    $(".fotorama").fotorama({
        data: $.parseJSON(picData),
        loop:true,
        arrows:true,
        fit:"scaledown"
    });

    function getImgNameByIndex(index){
        var k = '';
        for(var ii = 0; ii < 3 - (index.toString().length); ii++){
            k += '0';
        }
        return k += index;
    }
}