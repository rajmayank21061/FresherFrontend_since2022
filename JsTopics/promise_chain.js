const async1 = () => {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
         console.log("data 1 is loaded");
         resolve("success");
        },4000);
    });
}
const async2 = () => {
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
         console.log("data 2 is loaded");
         reject("error");
        },4000);
    });
}
// let pro1 = async1();
// let pro2 = async2();
// console.log("data is fetching");
// pro1.then( (res) => {
//     console.log("Now new data is fetching");
//     pro2.catch( (err) => {
//    })  
//  })
                     //both is same

// console.log("data 1 is fetching......");
// async1().then(()=> {
//     console.log("data 2 is fetching....");
//     async2().catch( () => {
//     })
// })

    // Promise_Chain method ->
function get_data(data){
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
            console.log("data is : ",data)
            resolve("success");
        }, 3000);
    });
}
get_data(111).then( () => {
    return get_data(222);
}).then( () => {
    return get_data(333);
}).then( () => {
    return get_data(444);
}).then((res)=>{
    console.log("res");
})