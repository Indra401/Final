var counter = 0;
var min = 1;
var max = 99;
var guess = 0;
var ans = Math.floor(Math.random() * 99 + 1);
var p=["img/bomber.png","img/smoke.png"];


function setsmoke(counter) {
    switch (counter) {
        case 1:
            document.img1.src = "img/smoke.png";
            break;
        case 2:
            document.img2.src = "img/smoke.png";
            break;
        case 3:
            document.img3.src = "img/smoke.png";
            break;
        case 4:
            document.img4.src = "img/smoke.png";
            break;
        case 5:
            document.img5.src = "img/smoke.png";
            break;
        case 6:
            document.img6.src = "img/smoke.png";
            alert("剩最後一次機會了!!")
            break;
        case 7:
            alert("失敗!!!!\n" + "全都猜錯了");
            alert("次數已達上限\n" + "總共猜了" + (counter) + "次\n再試一次?");
            restart();
    }
}

function doguess() {
    guess = code.value;
    if (guess == "") {
        alert("請猜數字!!")
    } else if (guess == ans) {
        alert("恭喜答對" + "總共猜了" + (counter) + "次\n再試一次");
        restart();
    } else if (guess < ans) {
        min = guess;
    } else if (guess > ans) {
        max = guess;
    }
    console.log(min + " " + max);
    counter++;
    setsmoke(counter);
    alert("範圍" + min + "~" + max);
    code.value = "";
};

function restart() {
    counter = 0;
    min = 1;
    max = 99;
    ans = Math.floor(Math.random() * 99 + 1);
    code.value = "";
    document.img1.src = "img/bomber.png";
    document.img2.src = "img/bomber.png";
    document.img3.src = "img/bomber.png";
    document.img4.src = "img/bomber.png";
    document.img5.src = "img/bomber.png";
    document.img6.src = "img/bomber.png";
};
