let mn = document.querySelector(".main");
let cr = document.querySelector(".cursor");
let imgc = document.querySelector(".imagec");

mn.addEventListener("mousemove", function(val){
gsap.to(cr , { 
   x:val.x,
   y:val.y,
   duration:0.5,
 
})
})

imgc.addEventListener("mouseenter", function(){
   cr.innerHTML = "Boom"
   gsap.to(cr,{
      scale:3
   })
})

imgc.addEventListener("mouseleave", function(){
   cr.innerHTML = ""
   gsap.to(cr,{
      scale:1
   })
})
