ymaps.ready(init);
function init() {    var myMap = new ymaps.Map("map", {
            center: [53.48895328886025, 49.434730826200095],            zoom: 12
        }, {            searchControlProvider: 'yandex#search'
        }),
        yellowCollection = new ymaps.GeoObjectCollection(null, {            preset: 'islands#redIcon'
        }),        blueCollection = new ymaps.GeoObjectCollection(null, {
            preset: 'islands#blueIcon'        }),
        yellowCoords = [[53.47524653321624, 49.47700605463471], [53.50478268770152, 49.40227949685244]];
    for (var i = 0, l = yellowCoords.length; i < l; i++) {        yellowCollection.add(new ymaps.Placemark(yellowCoords[i]));
    }
    myMap.geoObjects.add(yellowCollection).add(blueCollection);
    // Через коллекции можно подписываться на события дочерних элементов.    yellowCollection.events.add('click', function () { alert('Кликнули по желтой метке') });
    blueCollection.events.add('click', function () { alert('Кликнули по синей метке') });
    // Через коллекции можно задавать опции дочерним элементам.    blueCollection.options.set('preset', 'islands#blueDotIcon');
}


// const images = document.querySelectorAll('.slider .slider-line img');
// const sliderLine = document.querySelector('.slider-line');
// let count = 0;
// let width;

// function slider1(){
//     console.log('resize');
//     width = document.querySelector('.slider').offsetWidth;
//     sliderLine.style.width = width * images.length + 'px';
//     images.forEach( item => {
//         item.style.width = width + 'px';
//         item.style.height = 'auto';
//     });
//     console.log(width);
// }
// window.addEventListener('resize', slider1);
// slider1();


// document.querySelector('.resourceSliderLeftArrow').addEventListener('click', function(){
//     count++;
//     if (count >= images.length){
//         count = 0;
//     }
//     rollSlider();
// });

// function rollSlider(){
//     sliderLine.style.transform = 'translate(-' + count * width+'px)';
// }

window.addEventListener('DOMContentLoaded', function() {
    // Slider

    let slideIndex = 1;
    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block'; // Как ваша самостоятельная работа - переписать на использование классов show/hide
        
        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    }

    function plusSlides (n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });
});