
var g_curImgIndex = 20;
var g_imgMaxIndex = 194;
var g_imageLoadFinish = false;
var g_windowScrollTopLastVal = 0;

$(function() {
    initMasonryFeature();
});

function initMasonryFeature(){
    var $container = $("#iDiv_masonry_c");
    $container.imagesLoaded(function() {
        $container.masonry({
            itemSelector: ".cDiv_imgItem",
            columnWidth: 200,
            isAnimated: true,
            gutter: 10
        });
    });

    $container.bind("click", function(event){
        if (!classie.hasClass(event.target.parentNode, "cDiv_imgItem")){
            return;
        }
        var $curImg = $(event.target);
        var imgWidth = $curImg.width();
        var imgHeight = $curImg.height();
        if (imgWidth > imgHeight) {
            $(event.target.parentNode).toggleClass("cDiv_hBigImgItem");
        } else {
            $(event.target.parentNode).toggleClass("cDiv_vBigImgItem");
        }
        $container.masonry();
    });

    window.onscroll = function(){
        var $document = $(document);
        var viewHeight = document.body.clientHeight;
        var contentHeight = $container.height();
        var scrollTop = $document.scrollTop();
        if (scrollTop > g_windowScrollTopLastVal) {
            if (viewHeight + scrollTop >= contentHeight + 30) {
                checkImageLoadFinish();
                if (checkImageMaxIndexAndShowBottomTip()){ return; }
                if (g_imageLoadFinish) {
                    var elems = [];
                    var fragment = document.createDocumentFragment();
                    for (var i = 0; i < 5; i++) {
                        if (g_curImgIndex < g_imgMaxIndex) {
                            var elem = getItemElement(++g_curImgIndex);
                            fragment.appendChild(elem);
                            elems.push(elem);
                        }
                    }
                    $container.append($(fragment));
                    $container.masonry("appended", elems);
                }
                $(window).scrollTop(scrollTop - 10);
            }
        }
        g_windowScrollTopLastVal = scrollTop;
    };
}

function checkImageMaxIndexAndShowBottomTip(){
    var noMoreImg = false;
    if (g_curImgIndex >= g_imgMaxIndex){
        if ($("#iDiv_bottomTip_c").is(":hidden")){
            $("#iDiv_bottomTip_c").show();
        }
        noMoreImg = true;
    }
    return noMoreImg;
}

function getItemElement(imgIndex) {
    var curLength = (imgIndex + "").length;
    var pref = "";
    for (var i = 0; i < (3 - curLength); i++){
        pref += "0";
    }
    imgIndex = pref + imgIndex;
    var html = '<div class="cDiv_imgItem cDiv_hiddenImgItem"><img src="http://www.sunfloweryouandme.org/photo/20150411/' + imgIndex + '.jpg" /></div>';
    return $(html).get(0);
}

function checkImageLoadFinish(){
    g_imageLoadFinish = true;
    $("div.cDiv_imgItem img").each(function(){
        if ($(this).height() == 0){
            g_imageLoadFinish = false;
            return false;
        }
    });
    if (g_imageLoadFinish){
        $("div.cDiv_hiddenImgItem").removeClass("cDiv_hiddenImgItem");
        $("#iDiv_masonry_c").masonry({
            itemSelector: ".cDiv_imgItem",
            columnWidth: 200,
            isAnimated: true,
            gutter: 10
        });
    }
}

