//sets up links to required div ids
const home = document.getElementById("centerHome");
const content = document.getElementById("centerContent");
const about = document.getElementById("centerAbout");

//Wiring
home.addEventListener("mouseover",mouseOverBlack(home));
home.addEventListener("mouseout",mouseOutWhite(home));

content.addEventListener("mouseover",mouseOverWhite(content));
content.addEventListener("mouseout",mouseOutBlack(content));

about.addEventListener("mouseover",mouseOverBlack(about));
about.addEventListener("mouseout",mouseOutWhite(about));

//mouse over functions
function mouseOverBlack (x){
    x.classList.add("hoveredBlack");
}

function mouseOverWhite(x){
    x.style.color = "#343434";
}
//mouse out functions
function mouseOutWhite (x){
    x.style.color = "#343434";
}
function mouseOutBlack(x){
    x.style.color = "#C0C0C0";
}