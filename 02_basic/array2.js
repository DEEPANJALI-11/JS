const marvel=["ironman","thor","spiderman"]
const dc=["superman","batman","aquaman"]
marvel.push(dc)
console.log(marvel); //[ 'ironman', 'thor', 'spiderman', [ 'superman', 'batman', 'aquaman' ] ] dc is a single data here
console.log(marvel[3]); //[ 'superman', 'batman', 'aquaman' ]

marvel.concat(dc);
console.log(marvel); //[ 'ironman', 'thor', 'spiderman', [ 'superman', 'batman', 'aquaman' ] ]
const allheros=marvel.concat(dc)
console.log(allheros); //[ 'ironman', 'thor', 'spiderman', 'superman', 'batman', 'aquaman' ]

//spreadout values-> spread operator
const al_newheros=[...marvel,...dc] //[ 'ironman', 'thor', 'spiderman', 'superman', 'batman', 'aquaman' ]
console.log(al_newheros);

const anotherarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usablearr=anotherarr.flat(Infinity) //mention depth 
console.log(usablearr); //[  1, 2, 3, 4, 5,  6, 7, 6, 7, 4,  5]


console.log(Array.isArray("hitesh")); //false
//to convert
console.log(Array.from("Hitesh")); //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"hitesh"})); //[] interesting 
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); //[100,200,300]







