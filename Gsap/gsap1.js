var tl = gsap.timeline({
   //optional
   repeat:1,
   repeatDelay:1
});
//timeline is one by one execute timeline attach with continuesly.
tl.to("h5" , { 
   x:500,
   duration:2,
   scale:2,
   opacity:0,
   
})
tl.from("h4", {
   duration: 2,
   y: 30,
   ease:"back",
   opacity: 0,
   //stagger:0.3,//stagger value is a time & str means one by one anymation executes
 })
 tl.from("h3",{//tl in not working bcs you already mention 1 sec
   x:90,
   y:50,
   opacity:0,
   duration:0.4,
   repeat:2,
   yoyo:true
},1) // 1 means after 1 sec it's executes
tl.to("h2 " , { 
   x:250,
   y:200,
   scaleX:2,
   scaleY:2,
   opacity:0,
   duration:0.4,
   repeat:2,
   yoyo:true
})
