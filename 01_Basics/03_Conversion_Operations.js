let age = 20

console.log(typeof age)
console.log(typeof (age))

let valueInNumber = Number(age)
console.log(typeof valueInNumber)
console.log(valueInNumber)


/*
    Number conversion example

    "20"    => 20
    "20abc" => NaN(Not a Number)
    true    => 0
    false   => 1
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


/*
    Boolean conversion Example

    1       => true 
    0       => false
    ""      => false
    "Omkar" => true

*/

let sommeNumber = 512

let stringNumber = String(sommeNumber)
console.log(typeof stringNumber)
console.log(stringNumber)

//******************** More Operations on strings************************

let num = 7
let negNum =-num
console.log(negNum);


// Arithematic Operations 

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);        
// console.log(3/2);
// console.log(2**3);
// console.log(2%3);

let str1 = "om"
let str2 = "kar"

let str3 = str1+str2
console.log(str3)



// Some tricky conversions of strings.........

console.log("1" + 2)     // output => 12
console.log(1 + "2")     // output => 12
console.log("1" + 2 + 2) // output => 122
console.log(1 + 2 + "2") // output => 32

/*  Rule: if the string is present at start then evrything is converted into string
    Rule: if string present at end the first specific operation is done and then converted to string

*/


