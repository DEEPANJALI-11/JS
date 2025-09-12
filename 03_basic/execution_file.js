// Javascript execution context:

// {}->global execution context ->this(window object, if no value present)

// ->global execution context
// ->function execution context
// ->eval ec (mondodb)

// Phases:
// 1.	Memory creation phase 
// 2.	Execution phase

// Let val1=10
// Let val2=5
// Function addnum(num1,num2){
// Let total =num1+num2
// Return total
// }
// Let res1= addnum(val1,val2)
// Let res2=addnum(10,2)

// Steps:-
// 1.	Global execution : located under this
// 2.	Memory phase : val1 ->undefined, var2->undefined, addnum->definition, res1,ews2->undefined
// 3.	Execution phase: val1->10, val2->5, 
// addnum-> new variable environment +execution thread
// 					|
// 1.	Memory phase : val1 , val2, total->ud
// 2.	Execution context: num1=10, num2=5, total->15(returned to parent global execution ) thus result=15 , 
// Result2=>new variable env+thread
// 				|
// 1.Memory phase :val1,val2
// 2. execution phase


