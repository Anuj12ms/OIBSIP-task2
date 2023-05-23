window.addEventListener("scroll", function () {
    if (this.scrollY > 0) {
        document
            .getElementById("header")
            .classList
            .add("header-shadow")
    } else if (this.scrollY === 0) {
        document
            .getElementById("header")
            .classList
            .remove("header-shadow")

    }
})
let ham=document.getElementById("ham-menu");
    ham.addEventListener("click", function () {
        document
            .getElementsByClassName("nav-content")[1]
            .classList
            .add("active");
        document
            .getElementsByClassName("overly")[0]
            .classList
            .add("overly-active");
        ham.classList.add("cross");
    })

document
    .getElementsByClassName("overly")[0]
    .addEventListener("click", function () {
        document
            .getElementsByClassName("nav-content")[1]
            .classList
            .remove("active");
        document
            .getElementsByClassName("overly")[0]
            .classList
            .remove("overly-active");
        ham.classList.remove("cross");
    })

    //COUNTING NUMBERS ON SCROLL

    let counter=document.querySelectorAll(".counter");
    let section_counter=document.querySelector(".facts-area")
    let started=false;
    window.onscroll=function(){
        if(scrollY>=section_counter.offsetTop-500 && !started){
            counter.forEach((item)=>{
                counting(item);
            });
            started=true;
        }
    }

    function counting(ele){
        let end=ele.getAttribute("data-value");
        let interval=setInterval(()=>{
            ele.textContent++;
            if(ele.textContent===end){
                clearInterval(interval);
            }
            
        },200/end)
    }