



const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



function imageAnimation(){

    var elemC=document.querySelectorAll(".first")
    var fix=document.querySelector(".fixed-image .image-container")
    elemC.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            fix.style.display = "block"
                
        })
        e.addEventListener("mouseleave",function(){
            fix.style.display = "none"
                
        })

    })




    var elems = document.querySelectorAll(".first");
    elems.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            var type=e.getAttribute("data-type");
            
            if(type==="image"){
                var source=e.getAttribute("data-source");
                fix.style.backgroundImage =`url(${source})`

            }
            
            
            
        })
    })

}

function videoAnimation() {
    var elemV = document.querySelectorAll(".second");
    var fixV = document.querySelector(".fixed-image .video-container");

    elemV.forEach(function (f) {
        f.addEventListener("mouseenter", function () {
            fixV.style.display = "block";
        });

        f.addEventListener("mouseleave", function () {
            fixV.style.display = "none";
        });
    });

    var second = document.querySelectorAll(".second");

    second.forEach(function (f) {
        f.addEventListener("mouseenter", function () {
            var type = f.getAttribute("data-type");

            if (type === "video") {
                var source = f.getAttribute("data-source");
                preloadAndPlayVideo(source);
            }
        });
    });

    function preloadAndPlayVideo(source) {
        // Preload video
        var video = document.createElement("video");
        video.setAttribute("src", source);
        video.volume = 0; 

        
        video.addEventListener("loadeddata", function () {
            createAndPlayVideo(source);
        });

        // Load the video
        video.load();
    }

    function createAndPlayVideo(source) {
       
        var video = document.createElement("video");
        video.setAttribute("src", source);
        video.setAttribute("autoplay", true);
        video.setAttribute("loop", true);
        video.volume = 0; 
        video.style.width = "100%";
        video.style.height = "100%";

        
        fixV.innerHTML = '';
        fixV.appendChild(video);

        
        
    }
}


function menuAnimation() {
    var menu = document.querySelector("nav h3");
    var full = document.querySelector("#full-scr");
    var navimg = document.querySelector("nav img");
    var flag = 0;

    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0;
            navimg.style.opacity = 0;
            flag = 1;
        } else {
            full.style.top = "-100%";
            navimg.style.opacity = 1;
            flag = 0;
        }
    });
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

function loaderAnimation() {
    var loader = document.querySelector(".loader");
    setTimeout(function () {
        loader.style.top = "-100%";
    }, 4200);
}



var tablinks = document.getElementsByClassName("left-titles");
var tabcontents = document.getElementsByClassName("tab-contents");
var imgtab = document.getElementsByClassName("img-content");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    for (imgcontents of imgtab) {
        imgcontents.classList.remove("active-img");
    }

    var clickedTab = document.getElementById(tabname);
    var index = Array.from(tabcontents).indexOf(clickedTab);

    tablinks[index].classList.add("active");
    tabcontents[index].classList.add("active-tab");
    imgtab[index].classList.add("active-img");

    
    localStorage.setItem('activeImageId', tabname);

}

// Retrieve the active tab index from localStorage on page load
document.addEventListener('DOMContentLoaded', function () {
    
    var activeImageId = localStorage.getItem('activeImageId');

    if (activeImageId !== null) {
        tablinks[activeTabIndex].classList.add("active");
        tabcontents[activeTabIndex].classList.add("active-tab");
        imgtab[activeTabIndex].classList.add("active-img");
    }
});


swiperAnimation();
imageAnimation();
videoAnimation();
menuAnimation();

loaderAnimation();
