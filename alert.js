/*alert("Я JavaScript!");
alert("Клиника");*/
let name = "Джон"; 

name = "Толян";

/*alert ("admin");*/

console.log(name);
let nav = document.querySelector(".nav");
console.log(nav);
let priceList = document.querySelectorAll(".testlink");
console.log(priceList);

window.addEventListener("scroll", checkScroll);

document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
    let scrollPoss = window.scrollY;
    if (scrollPoss > 0) {
        nav.classList.add('red');
    } else {
        nav.classList.remove('red');
    }
}

for (let navItem of priceList) {
    navItem.addEventListener("click", function () {
        console.log(navItem.text); 
    });}
