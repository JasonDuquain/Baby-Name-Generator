/****** Main page animation on first load only *******/

if (!sessionStorage.getItem('stopanimate')) {
   
    let mainGroup = Array.from(document.querySelectorAll('.main__group, .main__submit-wrap'));
    
    let introText = new SplitText('.intro__para', {type: "lines"});

    let tl = new TimelineMax();
    tl.to('.header__title', 3, { scrambleText: 
        { 
            text: 'Baby Name Generator', 
            chars: "lowerCase", 
            speed: 0.1
        }
    });
    tl.staggerFrom(introText.lines, .7, {
        opacity:0, 
        rotationX:-120, 
        force3D:true, 
        transformOrigin:"top center -150",
        ease: Power2.easeOut
    }, 1.3);
    tl.staggerFrom(mainGroup, 1, { 
        opacity: 0,
        y: -100,
        ease: Back.easeOut,
        onComplete: function() {
            document.body.classList.add('stopanimate')
            sessionStorage.setItem('stopanimate', 'stop')
        }
    }, .2, "+=.3");
     
}

/******     Results page animation     *******/
document.addEventListener('DOMContentLoaded', (e) => {
    
    let resultsItem = Array.from(document.querySelectorAll('.results__item'));

    let tl2 = new TimelineMax();
    tl2.staggerFrom(resultsItem, .5, {
        opacity: 0,
        y: -100,
        ease: Power2.easeOut
    }, .3); 
    
}); 


/*****   Animate icon colors in input element focus   ******/
let inputs = document.querySelectorAll('.main__select, .main__input');

inputs.forEach(el => {
    el.addEventListener('focus', focusChange)
});

inputs.forEach(el => {
    el.addEventListener('blur', blurChange)
});


function focusChange(e) {
    let icon = e.target.previousElementSibling;
    icon.classList.add('focus');
}

function blurChange(e) {
    let icon = e.target.previousElementSibling;
    icon.classList.remove('focus');
}


/*****   Update Copyright Year to always be current   ******/
let year = document.querySelector('.footer__year');
year.textContent = new Date().getFullYear();
