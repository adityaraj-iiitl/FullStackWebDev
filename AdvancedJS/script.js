//three ways of selecting or referring to an element in js
//document.querySelector()
//document.getElementById()
//document.getElementsByClassName()
// let h1=document.querySelector("h1");
// console.log(h1);
// console.dir(h1)
//console.dir gives the tag in console in a dropdown format clicking on which we can get the details
//mainpulation of the content can be done by three tags
//innerHTML = changes the inside html so if some html code is needed to be entered it can be inserted through this
//innertText , TextContent = manipulates the innerText so if you have some text inside you can manipulate that using this

// whenever we want to change some property after finding it , then we can firt print the tag in console using console.dir( ) and then in the properties of the tag we can look inside the key value pairs for that particular property

// let a=document.querySelector("a");
// console.log(a.getAttribute("href"));

//we can append a new element or a property to html using createElement

// let h1=document.createElement("h1");
// h1.innerHTML= "radheshyam";
// document.body.append(h1);
// //append adds at the end of the body
// document.body.prepend(h1);
// //prepend adds at the beginning

//similarly we can add elements to some div also just by using querySelector

// let a=document.createElement("a");
// a.href="https://www.iskconkanpur.org/";
// a.innerText="Welcome to Iskcon kanpur";
// a.style="color:aqua";
// document.querySelector("div").append(a);

//we can change the style of the existing elements in two ways one by using .style operator and another by adding a particular class to a div

// h1=document.querySelector("h1")
// h1.style.color="white";
// h1.style.backgroundColor= "aqua";

//another way can be to a predefined class to that element

// h1.classList.add("hari");
//add basically adds that class remove removes that class and toggle adds if not there and remove if it's there

//what is the difference in textcontent and innertext
//textContent is faster than innertext because it takes out only the visible part
//let p=document.querySelector("p") p.textContent="hari boll"

//setAttribute sets the attributes like div.setAttribute("title","hari=boll")
//removeAttribute can be used to remove a attribute also

//in query selector if we are removing a class or by id then we have to use . and # but for specific selectors we can directly mention the names

let ul=document.querySelector("ul")
let li = document.createElement("li");
li.textContent="Banke bihari";
ul.appendChild(li);

let img=document.createElement("img")

let jaiho=document.querySelector(".jaiho");

img.placeholder="hariiiiiii";
img.style.height="50px";
img.style.width="100px";
img.alt="hariiii";
jaiho.append(img);

//querySelector selects only the first element with that tag but querySelectorAll() selects all the elements there
 let lii=document.querySelectorAll("li");
 lii.forEach(function(elem){
     elem.classList.add("highlight")
 })

 function dblclick(){
    li.style.backgroundColor ="seagreen";
 }

li.addEventListener("dblclick",dblclick)

// li.removeEventListener("dblclick",dblclick)

let inp=document.querySelector("input")
inp.addEventListener("input",function(e){
    if(e.data!==null)
    {
    console.log(e.data)
    }
})

let sel=document.querySelector("select")
let h3=document.querySelector("h3")
sel.addEventListener("change",function(e){
    let s=e.target.value;
    
    h3.textContent=`${s} is your sampradaya `
   h3.style.textTransform="capitalize"
})

//with the help of click() method we can click on some icon on the screen with the help of js , like in case of input buttons we can change their designs as we want 

let btn=document.querySelector("#btndiv")
let fileinp=document.querySelector("#fileinp")

btn.addEventListener("click",function(){
    fileinp.click();
})

fileinp.addEventListener("change",function(dets){
    btn.textContent=dets.target.files[0].name;
})

let form=document.querySelector("form")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let cardName = document.querySelector("#card h1");
    let image = document.querySelector("#image");
    cardName.textContent = event.target[0].value;
    image.src = event.target[3].value.trim();
});

//mouseover is used for dealing with if mouse goes over something and then removed

let abc=document.querySelector(".abc");

abc.addEventListener("mouseover",function(){
    abc.style.backgroundColor="black";
})

abc.addEventListener("mouseout",function(){
    abc.style.backgroundColor="aqua"
})

//mousemove is used to detect the movements of the mouse

// window.addEventListener("mousemove",function(dets){
//     abc.style.top =dets.clientY-100+ "px";
//     abc.style.left=dets.clientX-100+"px";
// })

//event object is the object we get after performing any events , we can get it inside the function created inside the eventlistener

//event bubbling :- if some event listener is present on the parent div then the childs automatically gets those events 

//event capturing
// in two phases do the application of events take place 
// phase 1 : event capturing: the event checking goes from parent towards child , and first parent's events are runned
// phase 2 : bubbling: , here the control goes from child to parent and the events of them are ran in this order also 

// phase 1 is by default off so we see bubbling first but if we on bubbling by just adding true at the end of addEventListener function then we will see event capturing occuring

let cdc=document.querySelector(".cdc")
abc.addEventListener("click",function(){
   console.log("a clicked");
},true)
cdc.addEventListener("click",function(){
    console.log("b clicked")
})
let c=document.querySelector(".c")
c.addEventListener("click",function(){
    console.log("c clicked")
})