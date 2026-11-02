//classes are like a factory which we can create and then using it we can create as many objects as we want of any time as we want 
//we can create them like this

function CreateHeading(color = "aqua") {
  this.name = "heading";
  this.color = color;

  this.write = function (text) {
    const heading = document.createElement("h3");
    heading.textContent = text;
    heading.style.color = this.color;
    document.body.appendChild(heading);
  };
}

//those property or methods which are common to all the objects can be kept in the prototype of the company to save space as the prototype properties or methods are shared by all the objects

CreateHeading.prototype.write= function(text)
{
    const heading=document.createElement("h3");
    heading.textContent=text;
    heading.style.color=this.color;
    document.body.appendChild(heading);
}

const obj1 = new CreateHeading();
obj1.write("humble obesiences prabhuji");

const obj2=new CreateHeading("seagreen");
obj2.write("jaya prabhupada");


//creating this same oop structure using a class , it is similar to this function type but there just constructor comes and on running a class that constructor function will run and then also prototyping we can do in the class common to all sub classes or objects

class createCar
{
    constructor(model,speed,color){
        this.model =model;
        this.speed=speed;
        this.color=color;
    }
    write(text)
    {
        let h1=document.createElement("h1")
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.appendChild(h1);
    }
    erase()
    {
        let h1s=document.querySelectorAll("h1")
        h1s.forEach((elem) => {
            if(elem.style.color===this.color)
            {
                elem.remove();
            }
        })
    }
}

let obj13=new createCar("lamborghini","200km/hr","red")
let obj14=new createCar("marutisuzuki","100km/hr","golden")
