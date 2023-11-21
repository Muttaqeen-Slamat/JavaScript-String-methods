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

//indexof display the words index
console.log(sentence.indexOf('Becoming'));
console.log(sentence.indexOf('the'));

//replace()  replaces the word but a comma is used to actually replace the word
console.log(sentence.replace('Becoming', 'Already'));

//repeat() repeat the string but the number used is howi= much it is going to repeat
console.log(sentence.repeat(4));

//startWith() checks the string if it begins with a certain will return a boolean
console.log(sentence.startsWith("B"));

//subString() display the string from a certain index (0,4) using a comma will make it start and end index
console.log(sentence.substring(0));

//trim() removes the leading and ending space unneccessary spaces 
console.log(sentence.trim());

//trimEnd()  removes only the ending spaces
console.log(sentence.trimEnd());

//trimStart() removes only the leading space
console.log(sentence.trimStart());

//slice()  to select a portion or the string by getting their index values
console.log(sentence.slice(0, 9));

//splice()converts a string to an array 
console.log(sentence.split());












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