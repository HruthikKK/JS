const btn = document.querySelector("button");
const box2 = document.querySelector(".hidden");

function f() {
    if(box2.classList.contains("reveal")){
        box2.classList.remove("reveal");
    }
    else{
        box2.classList.add("reveal");
    }
}

btn.addEventListener("click",f);