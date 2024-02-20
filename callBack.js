function getData(data,getNewdata){
    //2s
    setTimeout( () => {
        console.log("data",data);
        if(getNewdata){
            getNewdata();
        }
    },2000)
}
//callback hell
getData(111,
  () => {
    console.log("data 2 is loading")
    getData(222,() => {
      console.log("data 3 is loading")
      getData(333)
    })
})

//adding bcs understand asynchronous method

class Parent {
    constructor() {
      this.name = "John Doe";
    }
  }
  class Child extends Parent {
    constructor() {
      super(); // Call the constructor of the parent class
      this.age = 30;
    }
  }
  const child = new Child();
  
  console.log(child.name); // Outputs "John Doe"
  console.log(child.age); // Outputs 30