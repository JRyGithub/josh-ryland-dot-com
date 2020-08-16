//sets up links to required div ids
const navBar = document.querySelectorAll(".navBar");
const homeList = document.getElementById("homeList");
//mouse over functions
const mouseOver = () => {
    homeList.style.visibility = "visible";
    navBar.forEach(el => el.className = "centerText navBar mouseInNavBar");
};
const mouseOut = () => {
    homeList.style.visibility = "hidden";
    navBar.forEach(el => el.className = "centerText navBar mouseOutNavBar")
};

//wiring new
const wiringNavBar = navBar.forEach(nav => {
    nav.addEventListener("mouseover",mouseOver);
    nav.addEventListener("mouseout",mouseOut);
    });