// then(for resolve) and catch(for reject) method
const give_data = (data) => {
return new Promise((resolve,reject) => {
        console.log("data is : ",data);
        reject("error");
});
};
let promise = give_data(121);
promise.catch( (err) => {
    console.log("promise given is : ",err)
});