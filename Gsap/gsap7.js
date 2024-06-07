window.addEventListener("wheel", function(dets){
    if(dets.deltaY>0){
        gsap.to(".marque" , { 
           transform:'translateX(-200%)',
           duration:4,
           repeat:-1,
           ease:"none"
        })
        gsap.to(".marque img" , { 
           rotate:180,
           duration:0.0001

        })
    }
    else{
        gsap.to(".marque", { 
           transform:'translateX(0%)',
           duration:5,
           repeat:-1,
           ease:"none"
         
        })
        gsap.to(".marque img" , { 
            rotate:0,
            duration:0.0001
 
         })
    }
})