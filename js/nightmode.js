let btn = document.querySelector(".right a:nth-last-of-type(2)");
let aside = document.querySelector("aside");
let heading = document.querySelectorAll(".heading h3");

let data = new Date()
let hours = data.getHours()
let from = 20;
let to = 7;
let navigation = document.querySelectorAll(".container .navigation")

let nightMode = function(){
        document.body.classList.toggle("night");
        aside.classList.toggle("night");
        for(let elem of navigation){
            elem.classList.toggle("night");
        };
        for(let head of heading){
            head.classList.toggle("night")
        }  
}
if(hours >= from || hours <=to){
nightMode()
}else{
    document.body.classList.remove("night");
    aside.classList.remove("night");
}

btn.addEventListener('click', nightMode);