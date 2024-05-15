const namo = ["mohit","Aman","Batchi"]//not in json format
const JsonNames = `["Hemant","Rocky","Salaar","Deveratha Raisar"];`;
const JsonPeople = `[
{"name":"Rohit","age":78,"post": "Gardener","isEmployed":true,"hobbies":["Cricket","Programming","BasketBall","Running","workout"]
},
{ "name":"Adiya","age":34,"post": "Teacher","isEmployed":false,"hobbies":["Cricket","Programming","BasketBall","Running","workout"]
},
{
    "name":"Mukesh","age":12,"post": "Gardener","isEmployed":true,"hobbies":["Cricket","Programming","VollyBall","Running","Gym"]
}
]`
//Not use in JSON Formate const jsonString = JSON.stringify(namo);
//JSON.stringify() convert js objects to JSON string
//JSON.parse() convert JSON string to js object

const jsonParse = JSON.parse(JsonPeople);
console.log(jsonParse);
