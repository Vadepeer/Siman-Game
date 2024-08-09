let gameseq = [];
let userseq = [];

let btns = ["box1", "box2", "box3", "box4"]
let highScore = 0;
let started = 0;
let level = 0;
let h3 = document.querySelector("h3");
let body = document.querySelector("body")
let score = document.querySelector(".score")

document.addEventListener("keypress", function () {
    if (started == 0) {
        started = 1;
        levelUp()
    }

});

function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
};

function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
};

function levelUp() {
    userseq = []
    level++;
    h3.innerText = `Level ${level}`;

    let randNum = Math.floor(Math.random() * 4);

    let randcol = btns[randNum];
    let randbtn = document.querySelector(`.${randcol}`);
    gameseq.push(randcol)
    gameFlash(randbtn)
};


function gameoverflash() {
    h3.innerText = `GAME OVER! Your score ${level} Press any key to start again.`;
    if (highScore < level) {
        score.innerText = `Highest Score : ${level}`
        highScore = level;
    }

    started = 0;
    level = 0;
    body.classList.add("redflash")
    setTimeout(function () {
        body.classList.remove("redflash")
    }, 300)

}

function checkAns(idx) {


    if (gameseq[idx] === userseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp(), 1000);
            // body.classList.add("success");
            // setTimeout(function () {
            //     body.classList.remove("success");
            // }, 500)
        }
    } else {
        gameoverflash();
        userseq = []
        gameseq = []
    }
    console.log(userseq);
    console.log(gameseq);
}

function btnpress() {
    let btn = this;
    userFlash(btn);
    let userCol = btn.getAttribute("id");
    userseq.push(userCol)
    checkAns(userseq.length - 1);
}




let allBtn = document.querySelectorAll(".container div");
for (let btn of allBtn) {
    btn.addEventListener("click", btnpress);
}

