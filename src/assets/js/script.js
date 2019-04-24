
TweenMax.to('.header__title', 3, { scrambleText: 
    { 
        text: 'Baby Name Generator', 
        chars: "lowerCase", 
        speed: 0.1
    }
});

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
