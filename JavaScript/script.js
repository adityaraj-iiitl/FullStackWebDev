// let const var
// var :- 1. can be redeclared 2. reinitialized 3. function scoped
//let:- 1. reinitialized only 2. block scoped
//const 1. only block scoped , its value cannot be changed
//console.log(a)
//let a =12
//temporal dead zone : - zone in which the js compiler know s that the variable exists but it will not allow it to be accessed because of not intitializing
//hoisting , variable on getting declared and initialized in js , gets divided into two parts and its declaration part goes to the top and its initialization part remains there

//var will not give error but its value will be undefined
//console.log(a) var a=12
//let-no value 
//const - no value
// this is allowed - let a=10;{ let a=20; console.log(a)}

//we can change the value of object's details inside an object because it comes under updation

//var person={name:"krishna"}  person.name="radha" allowed person={} not allowed
//primitive variables are those whose copy is sent on asking let a=10; let b=a;// copy of a 
// reference variables are those whose actual real value if sent let a=[2,2,3]; let b=a   ( actual a)
//null- when we give no value
//undefined- there is no value assigned from startign so whatever value it got by default is null

//symbol - unique immutable value
//dynamic typing - in js the data types of variables also can change in the code later called dynamic typing while in static typing they cant be changed

//typeof can be used to know the type of a variable 
// typeof"Nan" = number
//typeof null = object
//NaN === NaN = false
//instanceof works for reference values , 
//a=[] a instanceof Array  true typeof a = object
//these small errors in java script are called quirks in java script
//type coercion - one type auto converts into another type
//"5"+1 = 51 js 
//"5"-1= 4 js does show
//truthy vs falsy values
// there are many values who are accepted as false in java
//0 false "" null undefined NaN document.all these are falsey values
//others are truthy values
//trick to know whether it is false or true
//write !!(anything) will show false or true on console
//NaN = failed maths operation in java like 2 * "harsh" is NaN
//symbols decided the type conversions also + prioritize strings and others int
//12 != "12" false 12 !== "12" true 

// function getGrade(score)
// {
//     if(score>=90) return "A+";
//     else if(score>=80) return "A";
//     else if(score>=70) return "B+";
//     else return "B";
// }

// function rps(user, comp)
// {
//     if(user=="rock" && comp=="scissor")
//         return "user";
//     else if(user=="scissor" && comp=="rock")
//         return comp;
//     else 
//         return "user";
// }
// let val= prompt("Insert a number ");
// for(let i=1;i<=val;i++)
// {
//     if(i&1)
//         console.log("odd");
//     else
//         console.log("even");
// }

// //fnc expression , function in form of expression
// let fnc = function()
// {
//     console.log("hello")
// }
// fnc(22)
//function abc(v1,v2){ console.log(v1+V2);} here it will show NaN ( as it is not a number )
//if there are many parameters then we can use rest to take the input , rest will take the input and will provide the output

//function abc(....val){ console.log(val)} abc(1,2,23,34);
//first class functions means functions taken as a variable in js
//higher order functions are those functions which accepts or return another example ex
// function greet()
// {
//     console.log("hello")
// }
// function execute(fn){
//     fn()
// }
// execute(greet)
//here execute is a first class function
//also we can return first class functions 
// function re()
// {
//     return function ab(){
//         console.log("hell0")
//     }
// }

// const ma=re()
// ma()

//Pure functions are those which doesnot change any outside value like a global let or something outside their domain

//impure functions are those which changes

//closures are those function which return another function that uses some of a variable of the parent function
function abc()
{
    let a=12;
    return function cde()
    {
        console.log(a)
    }
}

//lexical scoping it means that the variables declared in the child functions cannot be used in the parent functions
function abc()
{
    let a=12;
    function bcd(){
        let c=123;
        function abu()
        {
            let m=22;
        }
    }
}
//immediately invoked function expression those functions which are immediately called after running

(function abc(){
    console.log("hello")
})();

//function variables cannot be hoisted but function expressions can be hoisted
//function which doesnt return any thing return undefined in js function fn(){ return ;} fn() -> undefined

//function ct(){ int count=0; return function abc(){ count++; console.log(count);}}
// function ctr=ct();

//reusable discount calculator 
function discount(cost,d){
       return (d/100)*cost;
}

let ans=discount(500,10);
console.log(ans);

(function func()
{
  console.log("hello");  
   let ans=2;
   (function fr(){
    ans*=2;
   })()
   console.log(ans);
})();

//arrays
//unshift adds an element to the beginning
//splice removes an element from a particular index splice(2,1) remove 1 element from 2nd index
//slice(start index,end index + 1) gives a copy of the subsection of the array
//reverse reverses the main array
//arr.sort(function(a,b){ return a-b;}) returns in ascending order
//if written b-a returns in descending order
//arr.forEach(function(val){ console.log(val)})
//foreach runs the function for all elements
//map sirf tab use krna hae jb aapko ek naya array banana hae
// let newarr=arr.map(function(val){return 12;})
// arr=[2,3,4];
// let newarr=arr.filter(function(val){ if(val>10) return true; else return false;})
//filters the elements out of an array
//arr.reduce(function(accumulator,val){ return accumulator + val ; },0)
//it returns the one variable output the value of accumulator at the end
// let arr=[{id:1 , key:1 },{ id:2, key:2}];
// let va=arr.find(function(val){ return val.key==1})
// // console.log(va)
// //spread operator used to copy an arrya
// let arra=[2,3,1,1,2]
// let newarra=[...arra];

//destructuring
//arr=[2,32,232,21]
//let [a,b,,d]=arr a=2 b=32 d=21
//we can add elements using splice also as arr.splice(1,0,"Red","Yellow") let arr=["guava","mango"]
//some and every are some methods that can be used to check if some value of an array satisfy something or all values of an array satisfy something

//in case of nested objects we use stringify to clone the object into another objec
let obj={
    name:"aditya",
    age:19,
    address : {
        city:"bhopal",
    },
}
let ob2=JSON.parse(JSON.stringify(obj));

let obj2={
   "first-name":"krishnas servant",
}
let {"first-name" : firstName}=obj2;
for(let key in obj)
{
    console.log(key.valueOf);
}