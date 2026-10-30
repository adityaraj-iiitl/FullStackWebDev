let btn = document.querySelector(".subjectbtn");

let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let notesbtn = document.querySelector(".notesbtn");
let notesinp = document.querySelector(".notesinp");
let subjectinp = document.querySelector(".subjectinp");
let subjectbtn = document.querySelector(".subjectbtn");
let h4 = document.createElement("h4");

subjectinp.addEventListener("input", function (e) {
    h4.textContent = e.target.value;
});

subjectbtn.addEventListener("click", function () {
    div1.style.display = "none";
    div2.style.display = "flex";
});

let text;

notesinp.addEventListener("input", function (e) {
    text = e.target.value;
});

let ct = 0;
let arr = [];

notesbtn.addEventListener("click", function () {
    let h44 = document.createElement("h4");
    h44.textContent = h4.textContent;

    let p = document.createElement("p");
    p.textContent = text;

    let headi = h4.textContent;
    let arr2 = [headi, text];
    arr.push(arr2);

    p.classList.add("card-text");
    h44.classList.add("card-title");

    let divi = document.createElement("div");
    divi.classList.add("card-body");

    ct++;

    let divi2 = document.createElement("div");
    divi2.classList.add("card", "w-80");

    divi.appendChild(h44);

    let delbtn = document.createElement("button");
    delbtn.classList.add("btn", "btn-danger");
    divi2.setAttribute("id", `${ct}`);

    let i = document.createElement("i");
    i.classList.add("bi", "bi-trash");
    delbtn.classList.add("delbtn");
    delbtn.appendChild(i);

    divi.appendChild(p);
    divi.appendChild(delbtn);
    divi2.appendChild(divi);
    div3.appendChild(divi2);

    let str = JSON.stringify(arr);

    localStorage.setItem("cards", str);
    div2.style.display = "none";
    notesinp.value = "";
    subjectinp.value = "";
    div1.style.display = "flex";
});

div3.addEventListener("click", function (event) {
    const button = event.target.closest(".delbtn");

    if (button) {
        let card = button.closest(".card");
        const index = [...div3.children].indexOf(card);

        arr.splice(index, 1);
        let str = JSON.stringify(arr);
        localStorage.setItem("cards", str);
        button.closest(".card").remove();
    }
});

let stry = localStorage.getItem("cards");
let arra = JSON.parse(stry);

arra.forEach(function (item) {
    h4.textContent = item[0];
    text = item[1];

    let h44 = document.createElement("h4");
    h44.textContent = h4.textContent;

    let p = document.createElement("p");
    p.textContent = text;

    p.classList.add("card-text");
    h44.classList.add("card-title");

    let divi = document.createElement("div");
    divi.classList.add("card-body");

    ct++;

    let divi2 = document.createElement("div");
    divi2.classList.add("card", "w-80");

    divi.appendChild(h44);

    let delbtn = document.createElement("button");
    delbtn.classList.add("btn", "btn-danger");
    divi2.setAttribute("id", `${ct}`);

    let i = document.createElement("i");
    i.classList.add("bi", "bi-trash");
    delbtn.classList.add("delbtn");
    delbtn.appendChild(i);

    divi.appendChild(p);
    divi.appendChild(delbtn);
    divi2.appendChild(divi);
    div3.appendChild(divi2);
});
