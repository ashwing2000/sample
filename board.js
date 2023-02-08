const card1 = document.querySelector(".card1");
const userInput = document.getElementById("userinput");
const btn = document.getElementById("btn");
const editButton = document.getElementById("editButton");


function createElement() {
    let divParent = document.createElement("div");
    let divChild = document.createElement("div");
    let cross = document.createElement("i");
    let edit = document.createElement("i");


    edit.className = "fa-solid fa-pen-to-square";
    edit.addEventListener("click", function () {
        divParent.contentEditable = true;
        card1.focus();
    });
    divParent.className = "items"
    divParent.style.backgroundColor = "red";
    divParent.innerHTML = '<div>' + userInput.value + '</div>';

    cross.className = "fa-sharp fa-solid fa-xmark";
    cross.addEventListener("click", function () {
        divParent.remove();
    })
    divChild.appendChild(edit);
    divChild.appendChild(cross);
    divParent.appendChild(divChild);
    card1.appendChild(divParent);
    userInput.value = ""
    card1.appendChild(divParent);

}
btn.addEventListener("click", function () {
    if (userInput.value.length > 0) {
        createElement();
    }
})
userInput.addEventListener("keypress", function (e) {
    if (userInput.value.length > 0 && e.keyCode === 13) {
        createElement();
    }
})
const card2 = document.querySelector(".card2");
const userInput2 = document.getElementById("userinput2");
const btn2 = document.getElementById("btn2");

function createElement2() {
    let divParent2 = document.createElement("div");
    let divChild2 = document.createElement("div");
    let cross2 = document.createElement("i");
    let edit = document.createElement("i");


    edit.className = "fa-solid fa-pen-to-square";
    edit.addEventListener("click", function () {
        divParent2.contentEditable = true;
        divParent2.textContent.focus();
    });
    divParent2.className = "items"
    divParent2.style.backgroundColor = "blue";
    divParent2.innerHTML = '<div>' + userInput2.value + '</div>';

    cross2.className = "fa-sharp fa-solid fa-xmark";
    cross2.addEventListener("click", function () {
        divParent2.remove();
    })
    divChild2.appendChild(edit);
    divChild2.appendChild(cross2);
    divParent2.appendChild(divChild2);
    card2.appendChild(divParent2);
    userInput2.value = ""

}
btn2.addEventListener("click", function () {
    if (userInput2.value.length > 0) {
        createElement2();
    }
})
userInput2.addEventListener("keypress", function (e) {
    if (userInput2.value.length > 0 && e.keyCode === 13) {
        createElement2();
    }
})



const card3 = document.querySelector(".card3");
const userInput3 = document.getElementById("userinput3");
const btn3 = document.getElementById("btn3");


function createElement3() {
    let divParent3 = document.createElement("div");
    let divChild3 = document.createElement("div");
    let cross3 = document.createElement("i");
    let edit = document.createElement("i");


    edit.className = "fa-solid fa-pen-to-square";
    edit.addEventListener("click", function () {
        divParent3.contentEditable = true;
        divParent3.textContent.focus();
    })
    divParent3.className = "items"
    divParent3.style.backgroundColor = "green";
    divParent3.innerHTML = '<div>' + userInput3.value + '</div>';

    cross3.className = "fa-sharp fa-solid fa-xmark";
    cross3.addEventListener("click", function () {
        divParent3.remove();
    })
    divChild3.appendChild(edit);
    divChild3.appendChild(cross3);
    divParent3.appendChild(divChild3);
    card3.appendChild(divParent3);
    userInput3.value = ""


}
btn3.addEventListener("click", function () {
    if (userInput3.value.length > 0) {
        createElement3();
    }
})
userInput3.addEventListener("keypress", function (e) {
    if (userInput3.value.length > 0 && e.keyCode === 13) {
        createElement3();
    }
})


const card4 = document.querySelector(".card4");
const userInput4 = document.getElementById("userinput4");
const btn4 = document.getElementById("btn4");


function createElement4() {
    let divParent4 = document.createElement("div");
    let divChild4 = document.createElement("div");
    let cross4 = document.createElement("i");
    let edit = document.createElement("i");


    edit.className = "fa-solid fa-pen-to-square";
    edit.addEventListener("click", function () {
        divParent4.contentEditable = true;
        divParent4.textContent.focus();
    })
    divParent4.className = "items"
    divParent4.style.backgroundColor = "black";
    divParent4.innerHTML = '<div>' + userInput4.value + '</div>';

    cross4.className = "fa-sharp fa-solid fa-xmark";
    cross4.addEventListener("click", function () {
        divParent4.remove();
    })
    divChild4.appendChild(edit);
    divChild4.appendChild(cross4);
    divParent4.appendChild(divChild4);
    card4.appendChild(divParent4);
    userInput4.value = ""

}
btn4.addEventListener("click", function () {
    if (userInput4.value.length > 0) {
        createElement4();
    }
})
userInput4.addEventListener("keypress", function (e) {
    if (userInput4.value.length > 0 && e.keyCode === 13) {
        createElement4();
    }
})



