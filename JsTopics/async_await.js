function fobio(data) {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
         console.log("data is loaded",data);
         resolve("success");
        },2000);
    });
}
// async function tero() {
//     await fobio(111);
//     await fobio(222);
//     await fobio(777).then( (res)=>{
//         console.log(res)
//     })
// }
     // IIFE method
(async function () {
    await fobio(111);
    await fobio(222);
    await fobio(777).then( (res)=>{
    console.log(res)
    })
})();