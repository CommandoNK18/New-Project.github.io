//Hamburger menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

let result=document.querySelector(".result");
let btn=document.querySelector(".calculate-btn");
btn.addEventListener("click",()=>{
expVal=document.querySelector(".exp-val").value;
stdVal=document.querySelector(".std-val").value;
 let amount=""; 
 amount=(((expVal-stdVal)/stdVal)*100).toFixed(2);
 if(amount<0){
   amount=-amount;
 }
result.innerHTML=amount+"%";
});

