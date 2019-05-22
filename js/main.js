$(function () {
    "use strict";

    var nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

    //* Navbar Fixed  
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
});

let map = document.getElementById("maps");
let mapInfo = document.getElementById("mapInfo");
let allMap = map.querySelectorAll("g");

$('.maps-grow').click(function (e) {
    $('.maps-grow.active').not(this).removeClass('active');
    $(this).addClass("active");
})

map.addEventListener("click", function (e) {
    let mapTarget = e.target.parentNode;
    if (e.target.nodeName == "path") {
        for (let i = 0; i < allMap.length; i++) {
            allMap[i].classList.remove("active");
        }
        mapTarget.classList.add("active");
        let mapName = mapTarget.querySelector("title").innerHTML,
            mapDetail = mapTarget.querySelector("desc p"),
            mapPhoto = mapTarget.querySelector("img");

        mapInfo.innerHTML = "";
        mapInfo.insertAdjacentHTML("afterbegin", "<img src=" + mapPhoto.getAttribute('xlink:href') + " alt='" +
            mapPhoto.getAttribute('alt') + "'><h1>" + mapName + "</h1><p>" + mapDetail.innerHTML + "</p>");
        mapInfo.classList.add("show");
    }
})