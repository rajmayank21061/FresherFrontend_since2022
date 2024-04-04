const sum = (a,b) => {
    console.log(a+b)
}
function calculate(a,b,sumCallback){
    sumCallback(a,b);
}
// calculate(1,4,sum); you not pass as sum()
calculate(1,4, (a,b) =>{
    console.log(a+b);
})