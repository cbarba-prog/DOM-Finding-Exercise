//1
const qOne = document.getElementById("container");

//2
const qTwo = document.querySelector("#container")

//3
const qThree = document.querySelectorAll(".second")

//4
const qFour = document.querySelector("ol .third");

//5 
let helloText = document.querySelector("#container");
//helloText.innerText = "Hello!";

//6
let footer1 = document.querySelector(".footer");
footer1.classList.add("main");

//7 
let footer2 = document.querySelector(".footer");
footer2.classList.remove("main");

//8
let newLi = document.createElement("li");

//9
newLi.innerText = "four"

//10 
let list = document.querySelector("ul");
list.appendChild(newLi);

//11 
let liInsideOls = document.querySelectorAll("ol li");

for(let liInsideOl of liInsideOls){
    liInsideOl.style.backgroundColor = "green";
}

//12
let footer3 = document.querySelector(".footer");
footer3.remove();
