let nowSeason = 2;

window.onload = function (e) {
    if (checkCookie("season")) {
        nowSeason = getCookie("season");
    } else {
        setCookie("season", nowSeason, 100);
    }

    let d = new Date();
    let m = d.getMonth();

    if (m < 4) {
        changeSeason(1);
    } else if (m < 7) {
        changeSeason(2);
    } else if (m < 10) {
        changeSeason(3);
    } else {
        changeSeason(4);
    }
}

document.getElementById("centerBody").addEventListener("scroll", function (e) {
    var e = e || window.event;
    let flag = document.getElementsByClassName("section1")[0];
    if (this.scrollTop > flag.clientHeight && this.scrollHeight - this.scrollTop - 10 >= flag.clientHeight) {
        setNavColor(parseInt(nowSeason));
    } else {
        setNavColor(0);
    }
});

function setNavColor(season) {
    let nav = document.getElementById("nav");
    switch (season) {
        case 0:
            nav.style.backgroundColor = "rgba(72, 150, 165, 0.00)";
            break;
        case 1:
            nav.style.backgroundColor = "rgba(99, 168, 94, 1.00)";
            break;
        case 2:
            nav.style.backgroundColor = "rgba(72, 150, 165, 1.00)";
            break;
        case 3:
            nav.style.backgroundColor = "rgba(135, 95, 71, 1.00)";
            break;
        case 4:
            nav.style.backgroundColor = "rgba(226, 134, 81, 1.00)";
            break;
    }
}

function changeSeason(season) {
    setCookie("season", season, 100);
    nowSeason = season;
    changeContent(nowSeason);
}

function changeContent(season) {
    let headBg = document.getElementById("headBg");
    let eduBg = document.getElementById("eduPic");
    let menu = document.getElementById("menu");
    switch (season) {
        case 0:
            headBg.style.backgroundImage = 'url("/img/Spring.jpg")';
            eduBg.style.backgroundImage = 'url("/img/edu-bg-spring.jpg")';
            menu.style.backgroundColor = "rgba(49, 118, 44, 1.00)";
            break;
        case 1:
            headBg.style.backgroundImage = 'url("/img/Spring.jpg")';
            eduBg.style.backgroundImage = 'url("/img/edu-bg-spring.jpg")';
            menu.style.backgroundColor = "rgba(49, 118, 44, 1.00)";
            break;
        case 2:
            headBg.style.backgroundImage = 'url("/img/Summer.jpg")';
            eduBg.style.backgroundImage = 'url("/img/edu-bg-summer.jpg")';
            menu.style.backgroundColor = "rgba(32, 110, 125, 1.00)";
            break;
        case 3:
            headBg.style.backgroundImage = 'url("/img/Autumn.jpg")';
            eduBg.style.backgroundImage = 'url("/img/edu-bg-autumn.jpg")';
            menu.style.backgroundColor = "rgba(95, 55, 31, 1.00)";
            break;
        case 4:
            headBg.style.backgroundImage = 'url("/img/Winter.jpg")';
            eduBg.style.backgroundImage = 'url("/img/edu-bg-winter.jpg")';
            menu.style.backgroundColor = "rgba(186, 94, 41, 1.00)";
            break;
    }
}

function setCookie(cName, cValue, exDays) { //设置cookie
    var d = new Date();
    d.setTime(d.getTime() + (exDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cName + "=" + cValue + "; " + expires;
}

function getCookie(cName) { //获取cookie
    var name = cName + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie(value) { //检查cookie
    var v = getCookie(value);
    if (v != "") {
        return true;
    } else {
        return false;
    }
}

document.getElementById("menuBtn").addEventListener("click", openMenu);

document.getElementById("centerBody").addEventListener("click", closeMenu);


function openMenu() {
    document.getElementById("menuBtn").style.transform = "rotate(-180deg)";
    document.getElementById("menu").style.transform = "translateX(-300px)";
    document.getElementById("nav").style.transform = "translateX(-200px)";
    document.getElementById("centerBody").style.transform = "translateX(-200px)";
}

function closeMenu() {
    document.getElementById("menuBtn").style.transform = "rotate(45deg)";
    document.getElementById("menu").style.transform = "translateX(0px)";
    document.getElementById("nav").style.transform = "translateX(0px)";
    document.getElementById("centerBody").style.transform = "translateX(0px)";
}