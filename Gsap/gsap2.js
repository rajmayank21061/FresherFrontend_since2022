gsap.from("#page1 #box" , {       
   scale:0,
   duration:2,
   delay:1,
   rotate:360
 
})
gsap.from("#page2 #box" , {       
    scale:0,
    delay:1,
    duration:2,
    rotate:720,
    scrollTrigger:{
        trigger:"#page2 #box",
        markers:true,
        scroller:"body",
        start:"top 70%",
        end:"top 40%",
        scrub:true
    }
  
 })
 gsap.to("#page3 h1" , {       
transform:"translateX(-200%)",
scrollTrigger:{
trigger:"#page3",
markers:true,
scroller:"body",
start:"top 0%",
end:"top -140%",
scrub:2,
pin:true
}
  
 })
