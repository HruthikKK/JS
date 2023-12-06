const reveal = Array.from(document.querySelectorAll('.reveal'));
const revealBtn = Array.from(document.querySelectorAll('.revealBtn'));
const hidden = Array.from(document.querySelectorAll('.hidden'));

const faq = document.querySelector('.faq');

faq.addEventListener('click', function(e) {
    const target = e.target; 
    console.log(target);
    if(reveal.includes(target)){
        const idx = reveal.indexOf(target);
        const currHidden = hidden[idx];
        if(currHidden.style.display === 'none'){
            currHidden.style.display = 'block';
            revealBtn[idx].textContent = '-'
        }
        else{
            currHidden.style.display = 'none';
            revealBtn[idx].textContent = '+'
        }
    }
    else if(revealBtn.includes(target)){
        const idx = revealBtn.indexOf(target);
        const currHidden = hidden[idx];
        if(currHidden.style.display === 'none'){
            currHidden.style.display = 'block';
            revealBtn[idx].textContent = '-'
        }
        else{
            currHidden.style.display = 'none';
            revealBtn[idx].textContent = '+'
        }
    }
});

