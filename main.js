//sets up links to required div ids
//const aboutTitle = document.querySelectorAll("aboutTitle");
const aboutContent = document.getElementById("aboutContent");
const aboutTitle = document.getElementById("aboutTitle");
//mouse over functions
const mouseOver = () => {
    if(aboutContent.id == "aboutContent"){
        aboutContent.id = "aboutContentShow"
    }else{
        aboutContent.id = "aboutContent"
    }
};

//wiring new
/*const wiringNavBar = aboutTitle.forEach(x => {
    x.addEventListener("mouseover",mouseOver);
    x.addEventListener("mouseout",mouseOut);
    });*/
aboutTitle.addEventListener("mouseover", mouseOver);