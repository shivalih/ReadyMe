$(document).ready(function () {

    var width = "M 0 10 H " + $("#bannerLogo").width();
    $("#bannerLine").attr("d", width);

    //intel.xdk.device.setRotateOrientation("portrait");
    var isPhone = intel.xdk.isphone;

    //var isPhone = true;
    
    $("#bannerLogo").on("swipeLeft", function () {
        alert("Left");
    });

    $("#bannerLogo").on("swipeRight", function () {
        alert("Right");
    });

    $("#bannerLogo").on("tap", function () {
        alert("tap");
    });

    $("#bannerLogo").on("swipedown", function () {
        alert("Down");
    });
    
    /*$(".singleView").children("*").hide();
    $(".singleView").children(":first-child").show();
    $(".singleView").children(":last-child").show();*/
    
    $("#listView").on("click", function () {
        //$(".singleView").children("*").hide();
        $("#flipDiv").removeClass("flipped");
        $(this).addClass("fa-active");
        $("#tabView").removeClass("fa-active");
    });
    $("#tabView").on("click", function () {
        $("#flipDiv").addClass("flipped");
        $(".singleView").children("*").hide();
        $(this).addClass("fa-active");
        $("#listView").removeClass("fa-active");
    });

    $(window).load(function () {
        var windowHeight = document.body.clientHeight;
        var headerHeight = $("#topRow").height();
        var contentHeight = windowHeight - (headerHeight * 2);
        setContentHeight(contentHeight, isPhone);
    });

    $(window).resize(function () {
        var windowHeight = document.body.clientHeight;
        var headerHeight = $("#topRow").height();
        var contentHeight = windowHeight - (headerHeight * 2);
        setContentHeight(contentHeight, isPhone);
    }).resize();
    
    $(".page1").on("click", function(){
        $.afui.loadContent("#page1", false, false, "up");
    });
    $("#page1").on("swipeLeft", function(){
        $.afui.loadContent("#page2", false, false, "slide");
    });
    
    $(".page2").on("click", function(){
        $.afui.loadContent("#page2", false, false, "up");
        $.afui.updateBadge("page2",'3','bl','green');
    });
    $("#page2").on("swipeLeft", function(){
        $.afui.loadContent("#page3", false, false, "slide");
    });
    $("#page2").on("swipeRight", function(){
        $.afui.loadContent("#page1", false, false, "slide");
    });
    
    $(".page3").on("click", function(){
        $.afui.loadContent("#page3", false, false, "up");
    });
    $("#page3").on("swipeLeft", function(){
        $.afui.loadContent("#page4", false, false, "slide");
    });
    $("#page3").on("swipeRight", function(){
        $.afui.loadContent("#page2", false, false, "slide");
    });
    
    $(".page4").on("click", function(){
        $.afui.loadContent("#page4", false, false, "up");
    });
    $("#page4").on("swipeRight", function(){
        $.afui.loadContent("#page3", false, false, "slide");
    });
});

function setContentHeight(contentHeight, isPhone) {
    var offset = isPhone ? 4 : 18;
    contentHeight += offset;
    $(".singleView").height(contentHeight);
    $(".multiView").height(contentHeight);
    $("#bottomRow").height(contentHeight);
    $("#flipContainer").height(contentHeight);
    $("#flipDiv").height(contentHeight);
}

document.addEventListener("intel.xdk.device.orientation.change", orientationChagned, false);

function orientationChagned(value) {
    var width = "M 0 10 H " + $("#bannerLogo").width();
    $("#bannerLine").attr("d", width);
}