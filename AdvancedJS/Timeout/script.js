//setTimeout(func(){},interval in ms); is used to set a particular function that will occur after a particular period of time

//setInterval(func(){},interval in ms); is used to set a particular function to execute many times repeatedly after a fixed set interval

// setTimeout(function(){
//     console.log("error")
// },1000)
// setInterval(function(){
//     console.log("hello")
// },500)

//clear interval and clear timeout are used to clear those timeouts and intervals if we dont need to use them anymore

let bar=document.querySelector(".progress-fill")

let percent=document.querySelector("#percent")

let mb=document.querySelector("#mb")
let ct=0;
let int =setInterval(function(){
    ct++;
  if(ct<=100)
  {
    bar.style.width=`${ct}%`
    let num=ct/100*(10);
    mb.textContent=`${num} out of 10mb`
    percent.textContent=`${ct}%`}else
    {
        clearInterval(int);
    }
},300)