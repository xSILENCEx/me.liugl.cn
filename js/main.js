let nowSeason = 2;
let isMenuOpen = false;

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
    closeMenu();
}

function changeContent(season) {
    let sp = document.getElementById("spring");
    let su = document.getElementById("summer");
    let au = document.getElementById("autumn");
    let wi = document.getElementById("winter");

    let spE = document.getElementById("springEdu");
    let suE = document.getElementById("summerEdu");
    let auE = document.getElementById("autumnEdu");
    let wiE = document.getElementById("winterEdu");

    let menu = document.getElementById("menu");
    switch (season) {
        case 0:
            sp.style.opacity = "1.00";
            su.style.opacity = "0.00";
            au.style.opacity = "0.00";
            wi.style.opacity = "0.00";
            spE.style.opacity = "1.00";
            suE.style.opacity = "0.00";
            auE.style.opacity = "0.00";
            wiE.style.opacity = "0.00";
            menu.style.backgroundColor = "rgba(49, 118, 44, 1.00)";
            break;
        case 1:
            sp.style.opacity = "1.00";
            su.style.opacity = "0.00";
            au.style.opacity = "0.00";
            wi.style.opacity = "0.00";
            spE.style.opacity = "1.00";
            suE.style.opacity = "0.00";
            auE.style.opacity = "0.00";
            wiE.style.opacity = "0.00";
            menu.style.backgroundColor = "rgba(49, 118, 44, 1.00)";
            break;
        case 2:
            sp.style.opacity = "0.00";
            su.style.opacity = "1.00";
            au.style.opacity = "0.00";
            wi.style.opacity = "0.00";
            spE.style.opacity = "0.00";
            suE.style.opacity = "1.00";
            auE.style.opacity = "0.00";
            wiE.style.opacity = "0.00";
            menu.style.backgroundColor = "rgba(32, 110, 125, 1.00)";
            break;
        case 3:
            sp.style.opacity = "0.00";
            su.style.opacity = "0.00";
            au.style.opacity = "1.00";
            wi.style.opacity = "0.00";
            spE.style.opacity = "0.00";
            suE.style.opacity = "0.00";
            auE.style.opacity = "1.00";
            wiE.style.opacity = "0.00";
            menu.style.backgroundColor = "rgba(95, 55, 31, 1.00)";
            break;
        case 4:
            sp.style.opacity = "0.00";
            su.style.opacity = "0.00";
            au.style.opacity = "0.00";
            wi.style.opacity = "1.00";
            spE.style.opacity = "0.00";
            suE.style.opacity = "0.00";
            auE.style.opacity = "0.00";
            wiE.style.opacity = "1.00";
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

// 滚动到指定id
function goTo(s) {
    try {
        closeMenu();
        setTimeout(function (e) {
            document.getElementById(s).scrollIntoView({
                block: "start",
                behavior: "smooth"
            });
        }, 500);

    } catch (e) {
        console.log(e);
    }
}

///////手势判断
let startPoint = null;
document.addEventListener("touchstart", function (e) {
    var e = e || window.event;
    startPoint = e.touches[0];
});
document.addEventListener("touchmove", function (e) {
    var e = e || window.event;
    let endPoint = e.changedTouches[0];
    let x = endPoint.clientX - startPoint.clientX;
    let y = endPoint.clientY - startPoint.clientY;

    let d = 80;
    if (Math.abs(x) > d) {
        if (x > 0) {
            closeMenu();
            var e = e || window.event;
            startPoint = e.touches[0];
        } else {
            openMenu();
            var e = e || window.event;
            startPoint = e.touches[0];
        }
    }
});