//lazy loading is a method by which we can load only those images which are important and necessary to be loaded ,i.e, visible on the screen others we dont load the same time so that they are not disturbed by this change

let imgs = document.querySelectorAll("img")

const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(function(entry){
        if(entry.isIntersecting)
        {
            let img=entry.target;
            img.src=img.dataset.src;
            observer.unobserve(img);
        }
    })
},{
    root:null,
    threshold:.1
})

imgs.forEach(function(img){
    observer.observe(img)
})

//code splitting is dividing a huge code into different files and then importing the code from those different files whenever required two points:-
//1. the file to be imported must have export inside it
//2. the file which is importing must have type defined as module in the html

let btn=document.querySelector("button")
btn.addEventListener("click",async function coadLoad(){
   //on importing that a file an object consisting all the functions which are exported is imported , then we can call them as methods
   let heavy = await import("./heavy.js");
   heavy.abc();
});

//while adding a lot of new elements to any part of the website we should add it one by one as it will make the dom reload a lot of times causing unnecessary issues , so rather we should add them in a space allocated to us in the memory using document.createDocumentFragment() and then add those parts in this space and then finally append them only once to the main DOM structure

let ul=document.querySelector("ul");
let space=document.createDocumentFragment();

for(let j=0 ; j<100;j++)
{
    let li=document.createElement("li")
    li.textContent=j+1;
    space.appendChild(li)
}
ul.appendChild(space);


//memory leaks are those events or function which keeps occuring after a certain period also continously , like event listeners or majorly timers ,if at some point of time the activity of our timer is ended, then we should clear that interval also otherwise it will keep running

let ct=0;
const inte =setInterval(function(){
    if(ct<5)
    {
        console.log(ct)
    ct++;
     }else
     {
        console.log("finished")
        clearInterval(inte)
     }
})

//seperation of concerns :- it means that the coding logic and the ui code should be placed differently , they should not be placed at the same place , because in large codes this can be messy , so we should rather write them seperately

let divs= document.querySelector(".div1")

function add(num1,num2)
{
    return num1+num2;
}

function addh4(num1,num2)
{
     const answ=add(num1,num2)
     let h4=document.createElement("h4")
     h4.textContent=answ;
     h4.style.color= "white";
     divs.appendChild(h4);
}

//here there is seperate parts and regions for the logic and the ui code , so this structure is nice
addh4(5,3)

//we can create our own Map and filter like functions

function MyMap(arr,callback)
{
    let newarr=[]
    for(let j=0;j<arr.length;j++)
    {
        newarr.push(callback(arr[j],j,arr));
    }
    return newarr;
}

let arr=[2,3,4,5,6];
let newarra=MyMap(arr,function(num)
{
    return num+2;
});
//one observation as this script is loaded with type module so it will not be reachable on the console directly
console.log(newarra)

//event loop  ,now timers like settimeout ,or setinterval runs for the waiting time and then they are kept in a task stack where they wait until the call stack is empty and there is a event checker for noticing this which checks and as soon as the call stack is empty it moves it there

//web APis:- many things are such which are not there in js itself but which are provided by the chrome or browser some example :- console, setTimeout, setInterval ,these are not present everywhere but are there

//call stack is a stack where as a function is called is pushed to the top then executed and then removed ,so if there are function call inside functions then the last called function will be running first
