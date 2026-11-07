//exports are of two types default and named , default export can be a single one in the whole life and on calling import anyname from './app.js' then we will get that default export
//named export is when we import on the basis of the name of the program like export const arr=[] then to import it we have to write like import {arr} from './app.js'

//concept of virtual DOM , react if famous and was made for this purpose only if a small part of the whole website is to be updated then instead of updating the whole website the reactjs will update only that part of the website where the change is to be made in a virtual dom structure then that virtual dom will compare itself with the actual real dom and then apply the necessary changes

//jsx= javscript+html ,this file is a combination of javascript + html ,wherein we can write html codes very easily one example in js for creating h1 is a long process but in jsx creating h1 is as easy as like var h1 = <h1> hare krishna </h1> also functions can be called like <Hero /> this in jsx

//here we can pass only one element like a div from the return type of any function in react , if anyone wants to send multiple components then we can put them inside one single div element and then send them
//return (<div><h1>hare krishna</h1> <h2> hari boll</h2></div>)

//Fragments :- if we want to send more than one components and dont want to create a main parent div then we can send them using the concept of fragments in js , fragments are basically empty tags inside of which we can keep any no of elements as we want

//preferred way :- keep photos small and more used in assets and videos or less used ones in public

//use of files :- oxlintrc.json:- used for making custom rules so that if multiple programmers are contributing to the code then conflicts are not there , gitignore:- while pushing the code on github github will not push these files and will only accept the remaining files , package.json contains all the packages included in that project

//readme.md:- description of the file or the project which you are making

//Component based architecture :- a architecture in which we make different components and then combine them into one ,instead of writing all code at one place

//keeping all the css in one file at one place can make the code look messy but to keep it nice we work on a module css-jsx system wherein inside the components folder only we create seperate folders for each component and then add both the jsx and css file of that component in that folder in this way there css will remain seperate and thus the changes in css of one component will not affect other , i have done the same in the props project folder-03