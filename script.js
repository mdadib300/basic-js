// 1. print output
console.log('kire bhai')

// 2. declaring variable

// string
var name = 'Adib Chowdhury'; 
// numeric
const birthYear = 2005;
let age = 17;
// boolean
const isDead = false;

// 3. variable value update

var value = 50;
value = 100;
console.log(value)

// 4. Math operations

const onionPrice = 78;
const carrotPrice = 83;
console.log("Onion's Price:", onionPrice )
console.log("Carrot's Price:", carrotPrice )
console.log("Total price:", onionPrice+carrotPrice)
console.log("Price difference:", carrotPrice-onionPrice)

// math operations shorthand

var penPrice = 5;

penPrice = penPrice + 1;
// applied shortcut
penPrice += 1;
penPrice -= 1;
penPrice *= 2;
penPrice /=2;
penPrice ++;
penPrice --;
console.log(penPrice)

// convert string to number and vise versa

var num1 = '50';
var num2 = 40;
var sum = parseInt(num1) + num2;
console.log(sum)

var firstName = 'Adib ';
var lastName = 'Chowdhury ';
var birthGeneration = '3';
var fullSummary = firstName + lastName + parseFloat(birthGeneration);
console.log(fullSummary)
