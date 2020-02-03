//sets up links to required div ids
var home = document.getElementById("centerHome");
var content = document.getElementById("centerContent");
var about = document.getElementById("centerAbout");


//Wiring
function mOver(){
    this.style.color = 'blue';
}

function mOut(){
    this.style.color = 'red';
}

home.addEventListener("mouseover", mOver, false);
home.addEventListener("mouseout",mOut, false);

content.addEventListener("mouseover",mOver, false);
content.addEventListener("mouseout",mOut, false);

about.addEventListener("mouseover",mOver, false);
about.addEventListener("mouseout",mOut, false);