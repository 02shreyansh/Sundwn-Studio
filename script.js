const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
var elemC=document.querySelector(".elem-container")
var fix=document.querySelector(".fixed-image")
elemC.addEventListener("mouseenter",function(){
    fix.style.display = "block"
    
})
elemC.addEventListener("mouseleave",function(){
    fix.style.display = "none"
    
})
var elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image")
        fix.style.backgroundImage = `url(${image})`
    })
})

document.addEventListener("contextmenu",function(e){
    e.preventDefault()
},false)