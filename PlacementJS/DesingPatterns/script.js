//module pattern
//iife is a design pattern where we run all the codes and variables inside of a self executing function
//this helps in keeping the variables ,functions and methods private
//the main benefit of this design pattern is encapsulation or (data hiding) , through which we return only those values which are required and dont give access to other values

//ex :- a banking system where we dont want to keep the bankbalance data available in common to everyone so we keep that inside an iife 

//**through this iife we return an object which consists of all the methods that we want to give access outside as shown here */

let user = (function(){
    let bankbalance=123000;
    
    function checkBalance()
    {
        console.log(bankbalance);
    }
    function deposit(val)
    {
        bankbalance+=val;
        console.log("Balance : ",bankbalance);
    }
    function withdraw(val)
    {
        if(bankbalance>=val)
        {
            bankbalance-=val;
            console.log("withdrawn ",val," successfully");
            console.log("balance : ",bankbalance);
        }else
        {
            console.error("INSUFFICIENT FUNDS");
        }
    }

    return({
        checkBalance,
        deposit,
        withdraw,
    })
})();

//similarly revealing iife is one in which there is only one change to iife model and there we dont return the methods or variables with there direct names inside of the function , rather we return them with different names like in place of checkBalance we will write like : checkB : checkBalance()


//Factory function model :- here we create a function which acts like a factory for creating objects and then objects are gradually generated through that factory as we want

function createCar(name,model,topSpeed)
{
    let stock=100;
    function checkStock()
    {
        console.log(stock);
    };
    function buy(qty)
    {
        if(stock>=qty)
        {
            stock-=qty;
            console.log(`${qty} cars dispatched ,thank you for buying`)
        }else
        {
            console.log("sorry we dont have that many cars right now ",`You can order at max ${stock} amount of this model`)
        }
    };
    function add(qty)
    {
        stock+=qty;
        console.log(`No of cars restocked to ${stock}`);
    }
   return {
    name,
    model,
    topSpeed,
    add,
    buy,
    checkStock
   }
}

let car1=createCar("Ferrari","F01",200)
let car2=createCar("tata Safari","TC C",150)

//here in this model new objects are created without the use of class and constructors and then every object with its own set of memory of variables and methods are created

//observer pattern:- in this pattern we use classes which are used to create objects and then those objects deal with each other , this model shows the features of the basic OOPs model
//this is called observer model because one model observes other model and gets notified whenever the other one details are changed

//Ex- YoutubeChannel - Subscriber system

class YoutubeChannel{
    constructor()
    {
      this.subscribers=[]
    }
    subscribe(user)
    {
        this.subscribers.push(user);
        user.update("You have subscribed this channel");
    }
    unsubscribe(user)
    {
        let check=false;
        this.subscribers= this.subscribers.filter(function(sub){
            if(sub!==user)
                return true;
            else
            {
                check=true;
                return false;
            }
        })
        if(check)
            user.update("You have unsubscribed the channel")
        else
            user.update("You are not a subscriber to this channel ");
    }
    notify(data)
    {
       this.subscribers.forEach((sub)=>sub.update(data));
    }
}

class User{
    constructor(name)
    {
        this.name=name;
    }

    update(data)
    {
        console.log(data);
    }
}

let user1=new User("krishna")
let user2=new User("Shrimati Radha rani")

let coders=new YoutubeChannel();

