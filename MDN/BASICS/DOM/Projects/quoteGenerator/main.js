const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQ = document.querySelector(".newQ");

function changeQuote(){
    const rndN = Math.floor(Math.random()*26);
    quote.textContent = String.fromCharCode(65+rndN);
    author.textContent = rndN+1;
}

newQ.addEventListener('click',changeQuote);


 