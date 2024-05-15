gsap.to("#nav",{
    backgroundColor: "black",
    duration:1,
    delay: 1,
    height:"110px",
    scrollTrigger:{
        triger: "#nav",
        scroller: "body",
        markers: "true",
        start: "top -10%",
        end:"top -11%",
        scrub:1
    }

})