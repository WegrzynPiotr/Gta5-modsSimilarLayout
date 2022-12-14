const btn = document.querySelector(".right a:nth-last-of-type(2)");
const aside = document.querySelector("aside");
const heading = document.querySelectorAll(".heading h3");

const data = new Date()
const hours = data.getHours()
const from = 20;
const to = 7;
const navigation = document.querySelectorAll(".container .navigation")

const nightMode = function(){
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
