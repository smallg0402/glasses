let menu= document.querySelector(".header .menu");
const body = document.querySelector("body");

console.log(menu);


menu.addEventListener("click",function(e){
    e.preventDefault();
    if(body.getAttribute("class").indexOf("open-menu") == -1){
        body.setAttribute("class","open-menu");
    }else{
        body.setAttribute("class","");
    }
})



