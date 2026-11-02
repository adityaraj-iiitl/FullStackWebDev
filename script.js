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


//this keyword :- this keyword is a special keyword whose value depends on the place at which it appears , it can different values depending on the place at which it appeared

//this keyword in global and function scoped points to window
//in method scope it refers to the object ( method is a function (not arrow function) declared inside an object)

//in event handlers the value of this is on what the event handler is applied

//in the scope of class this keyword is used for representing the blank objects inside class it will create a blank object

//function es6 inside method es5 - window
//arrow function inside object - window
//arrow function inside method es5 - object
//arrow function basically takes the value from the parent whatever the value of this is inside the parent that it takes the same way

//the value which the this keyword holds inside the functions can be changed by using the manual binding technique under which comes call , bind and apply

//call :- by this call method the function the function can take the value and we can pass any number of inputs also

// let obj={name : "krishna",age : 10} function abcd(a,b,c){ console.log(this)}  abcd.call(obj,1,2,3) o/p :- {name: "krishna" , age:10}

//apply:-it is also like call just it takes only two inputs one the object and another one array consisting of the all the inputs that it wants
//abcd.apply(obj,[1,2,3])

//bind:- it creates a copy of the actual function with this keyword initialized inside that function as the object that we passed
//let func =abcd.bind(obj,1,2,3);

//extend and super keywords are used when we require teh properties of one class into another class ,in such cases we just simply made that class extend the previous class and as it has extended ,so it inherits all of its variable and methods also we can call  the parent class using super ex;-

// class user{
//     constructor(name,email,age)
//     {
//         this.name=name;
//         this.email=email;
//         this.age=age;
//     }
    
//     write(text)
//     {
//         let h1=document.createElement("h1");
//         h1.textContent=text;
//         document.body.appendChild(h1);
//     }
// }

// class admin extends user{
//     constructor(name,email,age,mob){
//         super(name,email,age)
//         //calling the parent class
//         this.mob=mob;
//     }
//     remove(){
//         let h1s=document.querySelectorAll("h1");
//         h1s.forEach(function(elem){
//             elem.remove();
//         })
//     }
// }
// let u1=new user("aditya","aditya@gamil.com","23");
// let u2=new user("krishna","madanmohan@gmail.com","infinity");
// let a1=new admin("Shrimati Radha Rani","Radha(madanmohanmohani)@gmail.com","infinity+1","harekrishnaharekrishna");

//now inheritance is also of two types :- 1.classical inheritance  2.prototypal inheritance
//classical inheritance means inheriting directly from the class on class level as in the above example
//prototypal inheritance when we create a new object using an old object and then both of those objects share the same memory address and then using the other we can refernce the 1st or so.

//let b1=Oject.create(u1);  here b1 also inherits the same methods and properties as u1

//synchronous and asynchronous code running 
//synchronous is when the code runs line by line
//asynchronous is when the code waits for a certain period and then runs

// console.log(1) - Sync 
// console.log(2 )-sync 
// setTimeout(() => {
//     console.log(3)  -async
// }, 2000);
// console.log(4)  - sync

//function callback means when we pass a function as a argument to another function and then that function in turn calls another function and these group of functions gradually creates a pattern called function callback like

// userLao("aditya",function(data){ saarePostlao(data.id,function(posts){ postprintkar(data.id)})})

//when there are too many functions whose exection depends on one another that only if one of the function then only we can run the another function or there are too many nestings of the function then this creates a hell

//promise is what executes when an asynchronous function sometimes fail to execute it has two types of states which are resolve and reject

//the resolve part runs when the it meets the criteria and the reject part runs when it doesnot meet the criteria and thus in both cases the js works ,ex

//let pr = new  promise(function(res,rejct){
// setTimeout(() => {
//     if(data.len==100) res 
//     else  rej ;
// }, 300);})

// promise have two functions one with .then which runs with resolve and .catch which runs with reject()

//ex; pr.then(function(val){console.log(val)}).catch(function(val){console.log(val)});

//await is a function which makes us avoid the try catch part of the promise

// let pr = new Promise(function(resolve, reject) {
//     let num = Math.floor(Math.random() * 10) + 1; // 1 to 10

//     if (num <= 5) {
//         resolve("yes it is lesser");
//     } else {
//         reject("no it is larger");
//     }
// });

// async function abcd(){
//     try{
//         let val=await pr;
//         console.log(val)
//     }catch(err)
//     {
//         console.log(err);
//     }
// }

// abcd()

//fetch keyword is used to fetch the data from the api from whereever it is called now fetch keyword is also a promise function so it  uses then and catch also

//like we can use fetch and then catch in it
//first of all the fetch keyword gives the data in a different format which we can then convert using .json and is passed to another then operation and in that second then operation we can deal with the raw data

fetch('https://randomuser.me/api/?results=10').then((raw)=> raw.json()).then((data)=> console.log(data))

