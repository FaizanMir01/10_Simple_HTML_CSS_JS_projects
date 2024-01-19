const linksDiv = document.querySelector(".nav-links");
const menu = document.querySelector("i");

var flag = true;
menu.addEventListener("click",()=>{
    if(flag){
        linksDiv.style.left= "0%";
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-xmark");
       
    }else{
        linksDiv.style.left = "-100%";
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-xmark");
    }
    flag = !flag;
})