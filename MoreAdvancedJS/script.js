// scopes of a variable : - 
//a variable can be global scoped means can it can be accessed from anywhere within the program
//it can be function scoped meaning can be accessed within the function
//it can be block scoped also meaning it can be accessed within the block only

//execution context
//on seeing a function in javascript, javascript make a box like structure to store the code of that function , and variables and all , in short a space is allocated in memory to store its code and all
//then in the running phase javascript executes the context in the following two phases , 1.Memory phase 2.execution phase
//this box is abstract means it is not visible but it is there like air and all

//lexical scoping -> the scope of a variable depends completely on the position of the element where it is present not from where it was called or something

//dynamic scoping -> the value or scope or  accessibility of a variable depends only from where it is called

// let a="krishna"
// function abc(){
//     console.log(a);
// }
// //will print krishna

// function bd()
// {
//     let a="shrimati radha rani";
//     abc()
// }

//closure is a function which returns another function and the returning function uses a variable of the parent function

//now by lexical scoping the value of that variable of parent function should not be there but whenever a closure is made a copy of that function and its variable is made and stores inside a backlink created which is named as [[environment]]

//private counters  here in terms of closure everytime that function is called to be stored a new copy of that variable is made for it and so any changes in the previous closure function copies will not change this one 

//function abc(){ let ct=0; return function abcd(){ c++; console.log(ct)}}  let a1=abc() a1() a1() let b1=abc()  b1() b1() //output 1 2 1 2

//encapsulation means showing or giving control of only what is essential outside and not changing that variable or thing which is important from later point of view not giving access to that

//ex in the above abc function if on the console we reset the value of c then for the function a1 the value will not change it will remain the same