// Variables In Javascript 

const accountNum = 1234567890
let accountEmail = "omkarbiradar@gmail.com"
var accountPass  = "om@4017"
accountCity      = "Hyderabad"
let accountState;//stores undefined as value

//accountNum = 987456123 // not allowed

accountEmail = "omkarb@gmail.com"
accountPass  = "osm@4017"
accountCity  = "Bengaluru"

console.log(accountNum)
console.log(accountEmail)
console.log(accountPass)
console.log(accountCity)


// prints multiple variable in table format 
console.table([accountNum,accountEmail,accountPass,accountCity,accountState])

/*
  Prefer not to use var because issue in block scope and functinal scope
*/