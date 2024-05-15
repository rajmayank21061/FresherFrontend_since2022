gsap.from("#box1",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360,
    scrollTrigger:"box1"
})
gsap.from("#box2",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360,
    scrollTrigger:{ //Two way to write scrollTrigger
        trigger:"#box2",
        scroller:"body",
        markers:true,
        start:"top 50%",
        scrub:5 //or true
        //means that box anymation depend upon the scroller
    }
})
gsap.from("#box3",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#box3",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }})

