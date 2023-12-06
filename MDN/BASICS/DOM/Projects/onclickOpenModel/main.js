const reveal = document.querySelector('.reveal');
const close = document.querySelector('.close');
const hidden = document.querySelector('.hidden');
const body = document.querySelector('body')

reveal.addEventListener('click',() => {
    if(hidden.style.display === 'none') hidden.style.display = 'block';
    else hidden.style.display = 'none';
})
close.addEventListener('click',() => {
    hidden.style.display = 'none';
})
window.addEventListener('click', (e) =>{
    if(e.target !== hidden && e.target !== reveal){
        hidden.style.display = "none";
    }    
})