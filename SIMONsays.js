let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];
let h2 = document.querySelector("h2");

let started = false;
let level = 0;
let max = 0;


let bodyTag = document.querySelector("body");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelup();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
};

function levelup() {
    userSeq = [];
    level++;

    h2.innerText = `Level = ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
    highTest();
}

let highest = document.createElement("h3");
let divhigh = document.querySelector(".highest");
divhigh.append(highest);

function highTest() {
    if (level > max) {
        max = level;
        highest.innerText = `Your Highest Score : ${max}`;

    }
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup(), 1000);
        }
    }
    else {
        h2.innerHTML = `Game Over ! Your Score Was<b> ${level}</b> <br>Press any Key to Start Again.`;
        bodyTag.style.backgroundImage="url(redSymon.jpg)";
        setTimeout(function () {
            bodyTag.style.backgroundImage="url(bgSymon.jpg)";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}



let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
