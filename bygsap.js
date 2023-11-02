let tl = gsap.timeline();
tl.from("#nav img,#nav h3,#nav3 h3,#nav3 button",{
    y : -100,
    duration: 1,
    delay:1,
    opacity:0,
    stagger:0.2

})
tl.from("#main h1",{
    y:100,
    opacity:0,
    stagger:0.3
})
tl.from("#main h4",{
    y:30,
    repeat:-1,
    yoyo:true
})