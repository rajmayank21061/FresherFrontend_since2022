fetch("jPeople.json")
.then( Response => Response.json())
.then( values => values.forEach(value => console.log(value.isEmployed)))
.error( error => console.error(error))