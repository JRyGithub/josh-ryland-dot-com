//sets up links to required div ids
const home = document.getElementById("centerHome");
const content = document.getElementById("centerContent");
const about = document.getElementById("centerAbout");

//mouse over functions
const mouseOver = () => home.style.color = "red";
const mouseOut = () => home.style.color = "#343434";

//Wiring
home.addEventListener("mouseover",mouseOver);
home.addEventListener("mouseout",mouseOut);