const name="Deepa"
const repocount=50
console.log(name+repocount +" value"); //outdated

console.log(`Hello my name is ${name} and my repo count is ${repocount}`); //modern way
const gameName=new String('Deepanjali') //object and in console it will give me key:value pair
/* const name=new String("deepanjali")
undefined
console.log(name)
VM174:1 String {'deepanjali'}0: "d"1: "e"2: "e"3: "p"4: "a"5: "n"6: "j"7: "a"8: "l"9: "i"
length: 10[[Prototype]]: String[[PrimitiveValue]]: "deepanjali" */

console.log(gameName[0]); //D
console.log(gameName.__proto__); //{}->object

console.log(gameName.length); //10
console.log(gameName.toUpperCase()); //but it will not change original text 
console.log(gameName.charAt(4)); //a
console.log(gameName.indexOf("a")); //4 same as 'a'

const newname=gameName.substring(0,4) //cant take -ve as starting
console.log(newname); //Deep last one is not included

const another1=gameName.slice(0,4) 
const another2=gameName.slice(-8,9)
console.log(another1); //Deep
console.log(another2); //epanjal
  
// In JavaScript, both slice() and substring() are string methods used to extract a portion of a string and return it as a new string.
// While they often produce the same result, there are key differences in their behavior: 
// Handling of Negative Indices:
// slice(): Accepts negative indices, which are treated as an offset from the end of the string. For example, str.slice(-3) extracts the last three characters. 
// substring(): Treats negative indices as 0.
// Handling of startIndex greater than endIndex:
// slice(): If startIndex is greater than endIndex, slice() returns an empty string. 
// substring(): If startIndex is greater than endIndex, substring() automatically swaps the two arguments and then extracts the substring.
// Flexibility of Arguments:
// slice(): Can be used on both strings and arrays.
// substring(): Can only be used on strings.

const str="   khushi    "
console.log(str); //   khushi   
console.log(str.trim());//khushi remove starting and endinh blank spaces

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-')) //https://hitesh.com/hitesh-choudhary

console.log(url); //https://hitesh.com/hitesh%20choudhary

console.log(url.includes('https')); //true
console.log(url.split("%")) //[ 'https://hitesh.com/hitesh', '20choudhary' ]

