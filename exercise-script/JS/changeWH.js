/**
 * Created by Magic on 2016/12/22.
 */
(function (window) {
    window.util = window.util || {};
    util.change = function () {
    var MouseX;
    var MouseY;
    var flag=false;
    var subX;
    var subY;
    var container = document.querySelector(".container");
    container.addEventListener("touchstart",
        function (e) {
            if(e.targetTouches&&e.targetTouches.length===1) {
                e = e.targetTouches[0];
                flag = true;

            }
            subX = e.pageX - container.offsetLeft;
            subY = e.pageY - container.offsetTop;
        });

    container.addEventListener("mousedown",
        function (e) {
            e.preventDefault();
            flag = true;
            subX=e.pageX-container.offsetLeft;
            subY=e.pageY-container.offsetTop;

        });
    document.addEventListener("touchend",
        function () {
            flag = false;
        });

    document.addEventListener("mouseup",
        function () {
            flag = false;
        });

    document.addEventListener("touchmove",
        function (e) {

            if(e.targetTouches&&e.targetTouches.length===1){
                e=e.targetTouches[0];MouseX =e.pageX-subX;
                MouseY =e.pageY-subY;
                if(flag){
                    container.style.left=MouseX+"px";
                    container.style.top=MouseY+"px";
                }
            }


        });
    document.addEventListener("mousemove",
        function (e) {
            e.preventDefault();

            MouseX =e.pageX-subX;
            MouseY =e.pageY-subY;
            if(flag){
                container.style.left=MouseX+"px";
                container.style.top=MouseY+"px";
            }else{

            }
        });
    };
})(window);