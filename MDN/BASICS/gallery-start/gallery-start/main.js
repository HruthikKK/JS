const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const pictureAddress = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg'];
/* Declaring the alternative text for each image file */

/* Looping through images */

for(const i of pictureAddress){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', i);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener("click",(e) => {displayedImage.src = e.target.src
});
/* Wiring up the Darken/Lighten button */

function changeTheme(){
    if(btn.getAttribute('class') == 'dark'){
        overlay.style.backgroundColor = 'rgb(0,0,0,50%)';
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
    }
    else{
        overlay.style.backgroundColor = 'rgb(0,0,0,0%)';
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
    }
};
btn.addEventListener("click",changeTheme);
