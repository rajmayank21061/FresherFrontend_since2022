let menu = document.querySelector(".nav i");
let cross = document.querySelector(".right i");
let tl = gsap.timeline();

tl.to(".right",{
    right:0,
    duration:0.9
})
tl.from(".right h3",{
    x:300,
    duration:1,
    stagger:0.3,
    opacity:0
})
tl.from(".right i",{
    opacity:0
})

tl.pause()

menu.addEventListener("click", function(){
    
    tl.play();
})

cross.addEventListener("click",function(){
    tl.reverse();
})