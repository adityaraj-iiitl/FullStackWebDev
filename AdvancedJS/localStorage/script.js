//localStorage SessionStorage and cookies these are the three kinds of places on the browser where we can store data 
//localStorage :- stores data permanently until it is voluntarily removed
//sessionStorage :- stores data until the end of one session and soon as the session ends the data got deleted

//methods used by both:- getItem, setItem , removeItem

// we do these four actions:- 1. add element using setItem 2. update item also using setItem 3. fetch item using getItem 4. remove the element using removeItem

//now both sessionStorage and localStorage uses the same methods just the syntax is sessionStorage.setItem(key,value) and localStorage.setItem(key,value)

//here in browser we can store only the strings and nothing else so like for a data like array or something we will use JSON.stringify() and then JSON.parse()

//for setting any value inside the cookies we simply use document.cookie and then set the values inside it you can check for it on chatgpt

//cookies can be made to stay for long using max age by default they are a session long , and stores less data like max of 4kb but using the localStorage we can store upto 5mb of data