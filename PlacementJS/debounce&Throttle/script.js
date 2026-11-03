//Debouncing is a concept where we set a make a function run after there is certain delays in some activity such as input
//a nice example is yt searchbar where when we are typing it doesnt change(at least in the previous versions) but as soon as we stop typing the searchbar start showing the related searches , here the concept of debouncing is used
//basically after the user stops doing an activity then after certain delay this function or this task will be performed

function debounce(fnc,delay)
{
    let timer;
    return function(...args)
    {
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fnc(...args);
        },delay);
    }
}

let input=document.querySelector("input")
// input.addEventListener("input",debounce(function fnc(){console.log("typed");},1000))

//throttling concept is where a particular event or a function keeps running at a particular time interval until the event is completely stopped,like some search bars there if you keep typing also then also you will see that after certain time intervals the search results keep coming 
//it is basically a continous event happening at a regular interval until a certain activity is being performed

function throttle(fnc,delay)
{
    let timer=0;
    return function(...args)
    {
        let now=Date.now();
        if(now-timer>=delay)
        {
            timer=now;
            fnc(...args);
        }
    }
}
input.addEventListener("input",throttle(function(){console.log("ran")},1000));