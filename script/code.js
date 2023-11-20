//charAt()  return character index

let sentence = "Becoming the Number 1 Dev."
//b will be displayed
console.log(sentence.charAt(0));

//endWith()   return characters with specified characters ...... returns booleans
console.log(sentence.endsWith(''));

//includes()   check if the word is included  ....returns booleans
console.log(sentence.includes('the')); //true
console.log(sentence.includes('bob')); //false

//lastIndexOf()  returns last index of specified word
console.log(sentence.lastIndexOf('Becoming'));
console.log(sentence.lastIndexOf('the'));

//indexof
console.log(sentence.indexOf('Becoming'));
















let numbers = [1,2,3,4,5,6,78,99,8,]



// array methods map and reduce
//modify
let modify = numbers.map( (x)=>{
    return x*2
})
console.log(modify);
// reduce
let sum = numbers.reduce((a,b) => a+b)
console.log(sum);

//constructor (number, Array, Object)

let x = Number (2)
console.log(x);

let myArr = new Array (3,5,11)
console.log(myArr);