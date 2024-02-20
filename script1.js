let data = "My company name is Seduyoucilly.";
class user {
  constructor(name,email){
  this.name = name;
  this.email = email;
  }
  view_data() {
    console.log("Our data is not for publicilly",data);
  }
}
class admim extends user {
  edit_data() {
    data = "My company name is carrifo.";
    console.log("our data is :",data);
  }
}