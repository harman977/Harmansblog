Nav1 = document.getElementById("navone");
Nav2 = document.getElementById("navtwo");
Nav3 = document.getElementById("navthree");
Nav4 = document.getElementById("navfour");
Nav5 = document.getElementById("navfive");
NAV1 = document.getElementById("NAVone");
NAV2 = document.getElementById("NAVtwo");
NAV3 = document.getElementById("NAVthree");
NAV4 = document.getElementById("NAVfour");
NAV5 = document.getElementById("NAVfive");
Top = document.getElementById("top");

Nav1.addEventListener("mouseover", onNav1mouseover);
Nav1.addEventListener("mouseout", onNav1mouseoff);
Nav1.addEventListener("click", onNav1click);
Nav2.addEventListener("mouseover", onNav2mouseover);
Nav2.addEventListener("mouseout", onNav2mouseoff);
Nav2.addEventListener("click", onNav2click);
Nav3.addEventListener("mouseover", onNav3mouseover);
Nav3.addEventListener("mouseout", onNav3mouseoff);
Nav3.addEventListener("click", onNav3click);
Nav4.addEventListener("mouseover", onNav4mouseover);
Nav4.addEventListener("mouseout", onNav4mouseoff);
Nav4.addEventListener("click", onNav4click);
Nav5.addEventListener("mouseover", onNav5mouseover);
Nav5.addEventListener("mouseout", onNav5mouseoff);
Nav5.addEventListener("click", onNav5click);
Top.addEventListener("click", onTopclick);

function onNav1mouseover() {
    Nav1.style.backgroundColor = "white";
    NAV1.style.backgroundColor = "white";
    NAV1.style.color = "black";
} 

function onNav1mouseoff() {
    Nav1.style.backgroundColor = "rgb(153, 116, 34)";
    NAV1.style.backgroundColor = "rgb(153, 116, 34)";
    NAV1.style.color = "white";
} 

function onNav1click() {
    window.location.href="HomePage.html";
} 

function onNav2mouseover() {
    Nav2.style.backgroundColor = "white";
    NAV2.style.backgroundColor = "white";
    NAV2.style.color = "black";
} 

function onNav2mouseoff() {
    Nav2.style.backgroundColor = "rgb(153, 116, 34)";
    NAV2.style.backgroundColor = "rgb(153, 116, 34)";
    NAV2.style.color = "white";
} 

function onNav2click() {
    window.location.href="CurrentMembers.html";
} 

function onNav3mouseover() {
    Nav3.style.backgroundColor = "white";
    NAV3.style.backgroundColor = "white";
    NAV3.style.color = "black";
} 

function onNav3mouseoff() {
    Nav3.style.backgroundColor = "rgb(153, 116, 34)";
    NAV3.style.backgroundColor = "rgb(153, 116, 34)";
    NAV3.style.color = "white";
} 

function onNav3click() {
    window.location.href="InitiativeGroups.html";
} 

function onNav4mouseover() {
    Nav4.style.backgroundColor = "white";
    NAV4.style.backgroundColor = "white";
    NAV4.style.color = "black";
} 

function onNav4mouseoff() {
    Nav4.style.backgroundColor = "rgb(153, 116, 34)";
    NAV4.style.backgroundColor = "rgb(153, 116, 34)";
    NAV4.style.color = "white";
} 

function onNav4click() {
    window.location.href="Inductions.html";
} 

function onNav5mouseover() {
    Nav5.style.backgroundColor = "white";
    NAV5.style.backgroundColor = "white";
    NAV5.style.color = "black";
} 

function onNav5mouseoff() {
    Nav5.style.backgroundColor = "rgb(153, 116, 34)";
    NAV5.style.backgroundColor = "rgb(153, 116, 34)";
    NAV5.style.color = "white";
} 

function onNav5click() {
    window.location.href="MeetingMinutes.html";
} 

function onTopclick() {
    window.scrollTo(0, 0);
} 