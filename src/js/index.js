import '../scss/style.scss';

const minMediaQuery = window.matchMedia('(min-width: 768px)');
let swiper

function swiperInit() {
    swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
};

function checkSwiper(e) {
    if(!e.matches) {
        swiperInit();
    } else if(swiper !== undefined) {
        for(let i = 0; i < swiper.length; i++) {
            swiper[i].destroy();
        }    
    } 
}

minMediaQuery.addEventListener('change', checkSwiper);
checkSwiper(minMediaQuery);


let burgerFirst = document.querySelector('.burger-first');
let burgerSecond = document.querySelector('.burger-second');
let burgerThird = document.querySelector('.burger-third');

let openButtonFirst = document.querySelector('.open-button-first');
let closeButtonFirst = document.querySelector('.close-button-first');

let openButtonSecond = document.querySelectorAll('.open-button-second');
let closeButtonSecond = document.querySelectorAll('.close-button-second');

let openButtonThird = document.querySelectorAll('.open-button-third');
let closeButtonThird = document.querySelectorAll('.close-button-third')

openButtonFirst.addEventListener('click', function () {
    burgerFirst.classList.add('burger-show');
});
closeButtonFirst.addEventListener('click', function () {
    burgerFirst.classList.remove('burger-show');
});

openButtonSecond.forEach(openButton => {
    openButton.addEventListener('click', function () {
        burgerSecond.classList.add('burger-show');
    });
});
closeButtonSecond.forEach(closeButton => {
    closeButton.addEventListener('click', function () {
        burgerSecond.classList.remove('burger-show');
    });
});

openButtonThird.forEach(openButton => {
    openButton.addEventListener('click', function () {
        burgerThird.classList.add('burger-show');
    });
});
closeButtonThird.forEach(closeButton => {
    closeButton.addEventListener('click', function () {
        burgerThird.classList.remove('burger-show');
    });
});
