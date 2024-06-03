var initial = "M 20 100 Q 550 100 980 100 " 
var final = "M 20 100 Q 550 100 980 100 " 

var string = document.querySelector(".curve")

string.addEventListener("mousemove",function(dets){
  path = `M 20 100 Q ${dets.x} ${dets.y} 980 100`

  gsap.to("svg path" , { 
     
   attr: { d:path   },
   duration:0.3,
   ease:"power3.out"

  })
})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path" , { 
       attr:{d:final},
       duration:1.5,
       ease: "elastic.out(1,0.3)"

     
    })
})

// string.addEventListener("mouseenter",function(dets){
//     console.log("entered.")
// })
// string.addEventListener("mouseleave",function(){
//     console.log("leaved!")
// })