//sets up links to required div ids
const home = document.getElementById("centerHome");
const content = document.getElementById("centerContent");
const about = document.getElementById("centerAbout");
const navBar = document.querySelectorAll(".navBar");
//mouse over functions
const mouseOver = () => this.style.color = "red";
const mouseOut = () => this.style.color = "#343434";
//wiring new
const wiringNavBar = navBar.forEach(nav => {
    nav.addEventListener("mouseover",mouseOver);
    nav.addEventListener("mouseout",mouseOut);
    });


//Wiring
//home.addEventListener("mouseover",mouseOver);
//home.addEventListener("mouseout",mouseOut);