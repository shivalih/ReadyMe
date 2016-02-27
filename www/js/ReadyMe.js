$(document).ready(function(){
    
                
    
                var width = "M 0 10 H " + $("#bannerLogo").width();
                $("#bannerLine").attr("d", width);
                
                
                //intel.xdk.device.setRotateOrientation("portrait");
                
                $("#bannerLogo").on("swipeLeft", function(){
                    alert("Left");
                });
                
                $("#bannerLogo").on("swipeRight", function(){
                    alert("Right");
                });
                
                 $("#bannerLogo").on("tap", function(){
                    alert("tap");
                });
                
                 $("#bannerLogo").on("swipedown", function(){
                    alert("Down");
                });

                $("#listView").on("click", function(){
                    $("#flipDiv").removeClass("flipped");
                    $(this).addClass("fa-active").addClass("activeBorder");
                    $("#tabView").removeClass("fa-active").removeClass("activeBorder");
                });
                $("#tabView").on("click", function(){
                    $("#flipDiv").addClass("flipped");
                    $(this).addClass("fa-active").addClass("activeBorder");
                    $("#listView").removeClass("fa-active").removeClass("activeBorder");
                });
    
$(window).load(function() {
    
    var wh = window.innerHeight;
    var deh = document.documentElement.scrollHeight;
    var dh = document.body.clientHeight;
    
    //alert(wh + " " + deh + " " + dh);
    var windowHeight = document.body.clientHeight;
    //alert(windowHeight);
    var headerHeight = $("#topRow").height();
    var contentHeight = windowHeight - (headerHeight * 2);
    //alert(contentHeight);
    $("#bottomRow").height(contentHeight);
});
    
    $(window).resize(function() {
        var windowHeight = document.body.clientHeight;
    //alert(windowHeight);
    var headerHeight = $("#topRow").height();
    var contentHeight = windowHeight - (headerHeight * 2);
    //alert(contentHeight);
    $("#bottomRow").height(contentHeight);
    }).resize();
    
    $("#topRow").ready(function(){
    alert("Window :" + windowHeight + "\n" + "Header : " + headerHeight);                  
                      });
    //alert("Window :" + windowHeight + "\n" + "Header : " + headerHeight);
           
    
              });
                document.addEventListener("intel.xdk.device.orientation.change", orientationChagned, false);
            
            function orientationChagned(value)
            {
                var width = "M 0 10 H " + $("#bannerLogo").width();
                $("#bannerLine").attr("d", width);
            }
