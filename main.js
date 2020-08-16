//sets up links to required div ids
const navBar = document.querySelectorAll(".navBar");
//mouse over functions
const mouseOver = () => navBar.forEach(el => el.className = "centerText navBar mouseInNavBar");
const mouseOut = () => navBar.forEach(el => el.className = "centerText navBar mouseOutNavBar");

//wiring new
const wiringNavBar = navBar.forEach(nav => {
    nav.addEventListener("mouseover",mouseOver);
    nav.addEventListener("mouseout",mouseOut);
    });