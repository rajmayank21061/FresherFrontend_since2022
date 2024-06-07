function TextBreaker(){
let h1 = document.querySelector(".main h1");

let H1_text = h1.textContent;

let splitWords = H1_text.split("");

let clutter = "";
const half = splitWords.length/2;

splitWords.forEach( (elem,idx) => {
       if(idx<half){
    clutter += `<span class="halfA"> ${elem} </span>`;
       }
       else{
        clutter += `<span class="halfB"> ${elem} </span>`;
       }
})
h1.innerHTML = clutter;
}
TextBreaker();

 gsap.from("h1 .halfA" , { 
    y:50,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.11 //if give in minus then animation reverse
 })
 gsap.from("h1 .halfB" , { 
    y:50,
    opacity:0,
    duration:1,
    delay:1,
    stagger:-0.11 //if give in minus then animation reverse
 })