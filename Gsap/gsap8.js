let tl = gsap.timeline();
tl.from(".page h1,.part2 h4,.part2 button" , { 
   y:-30,
   opacity:0,
   duration:0.8,
   stagger:0.1
 
})
tl.from(".left h1" , { 
    x:-200,
    opacity:0,
    duration:0.5
 
})
tl.from(".left p,.left button",{
    x:-200,
    opacity:0,
    duration:0.8,
    stagger:0.2
})
tl.from(".right img",{
    rotate:180,
    duration:0.1,
    opacity:0
 
})
tl.from(".page3 img",{
    y:30,
    opacity:0,
    duration:1,
    stagger:0.2
})
let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        markers:true,
        start:"top 40%",
        end:"top 0%",
        scrub:2//animation stach markers and depend your scroller
        
    }
})
tl2.from(".serv" , { 
   y:-90,
   opacity:0,
   duration:1.5,
   stagger:0.3
 
})
tl2.from(" .box1 ",{
    x:-200,
    opacity:0,
    duration:0.5
},"gym")
tl2.from(".box2",{
    x:200,
    opacity:0,
    duration:0.5
},"gym")
tl2.from(" .box3",{
    x:-200,
    opacity:0,
    duration:0.5  
},"gymm")
tl2.from(" .box4",{
    x:200,
    opacity:0,
    duration:0.5
},"gymm")