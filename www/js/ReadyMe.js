$(document).ready(function () {

    var width = "M 0 10 H " + $("#bannerLogo").width();
    $("#bannerLine").attr("d", width);

    //intel.xdk.device.setRotateOrientation("portrait");
    //var isPhone = intel.xdk.isphone;

    var isPhone = true;
    
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
        $(".singleView").show();
        $("#flipDiv").removeClass("flipped");
        $(this).addClass("fa-active");
        $("#tabView").removeClass("fa-active");
    });
    $("#tabView").on("click", function () {
        $("#flipDiv").addClass("flipped");
        $(".singleView").hide();
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
        //$.afui.loadContent("#page1", false, false, "up");
        $.afui.loadContent("#page1", false, false);
    });
    $("#page1").on("swipeLeft", function(){
        $.afui.loadContent("#page2", false, false, "slide");
        //$(this).siblings().hide();
    });
    $(".page2").on("click", function(){
        $.afui.loadContent("#page2", false, false);
    });
    $("#page2").on("swipeLeft", function(){
        $.afui.loadContent("#page3", false, false, "slide");
    });
    $("#page2").on("swipeRight", function(){
        slidePrevPage($(this),"page1");
    });
    
    $(".page3").on("click", function(){
        $.afui.loadContent("#page3", false, false, "up");
    });
    $("#page3").on("swipeLeft", function(){
        $.afui.loadContent("#page4", false, false, "slide");
    });
    $("#page3").on("swipeRight", function(){
        slidePrevPage($(this),"page2");
    });
    
    $(".page4").on("click", function(){
        $.afui.loadContent("#page4", false, false, "up");
    });
    $("#page4").on("swipeRight", function(){
        slidePrevPage($(this),"page3");
    });
    

    $("#mpage1").on("swipeLeft", function(){
        $.afui.loadContent("#mpage2", false, false, "slide");
        //$(this).siblings().hide();
    });
    $("#mpage2").on("swipeLeft", function(){
        $.afui.loadContent("#mpage3", false, false, "slide");
    });
    $("#mpage2").on("swipeRight", function(){
        slidePrevPage($(this),"mpage1");
    });
    $("#mpage3").on("swipeLeft", function(){
        $.afui.loadContent("#mpage4", false, false, "slide");
    });
    $("#mpage3").on("swipeRight", function(){
        slidePrevPage($(this),"mpage2");
    });
    $("#mpage4").on("swipeRight", function(){
        slidePrevPage($(this),"mpage3");
    });
});

function slidePrevPage(currPage, prevPageId)
{
    var prevPage = document.getElementById(prevPageId);
    var currentView = document.getElementById("mainPage");
    $.afui.runTransition("slide", currPage, prevPage , true, null);
    $.afui.activeDiv = prevPage;
    currPage.removeAttr("style");
}

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