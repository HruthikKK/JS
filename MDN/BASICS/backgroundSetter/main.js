const sect = document.querySelector("section");
const mB = document.querySelector("#morning");
const eB = document.querySelector("#evening");
const nB = document.querySelector("#night");

mB.addEventListener("click",() => {
    sect.style.backgroundColor = "white";
}
);
eB.addEventListener("click",() =>{
    sect.style.backgroundColor = "aqua";
}
);
nB.addEventListener("click",() =>{
    sect.style.backgroundColor = "black";
}
);
