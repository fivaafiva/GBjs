'use strict';

let mySlides = document.querySelectorAll('.mySlides'),
    btnChangeSlide = document.querySelectorAll('.carousel-container a'),
    dotContainer = document.querySelector('.dot-container'),
    dot = document.querySelectorAll('.dot');

let currentSlide = 0; //счетчик слайдов - 1

btnChangeSlide[1].addEventListener( 'click', rightClick);

function rightClick() { //нажатие на правую кнопку
    for(let i = 0; i < mySlides.length; i++) {  //цикл поиска класса на соответсвие

        if ( mySlides[i].classList.contains('fade') ) { //нашли интересующий класс
            currentSlide = i; //присвоили номер итератора
        }
    }
    mySlides[currentSlide].classList.remove('fade'); //удалили у текущего слайда классс отображения
    dot[currentSlide].classList.remove('active');

    if (currentSlide+1 == mySlides.length) { //если слайд последний
        currentSlide = currentSlide - mySlides.length; //сбрасываем счетчик
    }
    
    mySlides[currentSlide+1].classList.add('fade'); //добавили класс отображения к следующему
    dot[currentSlide+1].classList.add('active');        
}


btnChangeSlide[0].addEventListener('click', function() { //нажатие на левую кнопку

    for(let i = 0; i < mySlides.length; i++) {  //цикл поиска класса на соответсвие

        if ( mySlides[i].classList.contains('fade') ) { //нашли интересующий класс
            currentSlide = i; //присвоили номер итератора
        }
    }
    mySlides[currentSlide].classList.remove('fade'); //удалили у текущего слайда классс отображения
    dot[currentSlide].classList.remove('active');

    if (currentSlide <= 0) { //если слайд последний с начала
        currentSlide = mySlides.length; //сбрасываем счетчик на последний
    }
    
    mySlides[currentSlide-1].classList.add('fade'); //добавили класс отображения к предыдущему
    dot[currentSlide-1].classList.add('active');        

});

dotContainer.addEventListener('click', function(event) { //делегироване событий кнопки-кружки
    let x = event.target;
    if (  x && x.classList.contains('dot') && !x.classList.contains('active') ) { //проверяем нажата ли кнопка


        for (let i = 0; i < dot.length; i++) { //ищем какая именно нажата из узла

            if (dot[i] == x) {
                currentSlide = i; //записываем в текущий слайд
            } else {
                dot[i].classList.remove('active'); //удаляем класс у всех кнопок
            }

        }

        for(let i = 0; i < mySlides.length; i++) {  //цикл поиска класса на соответсвие

            if ( mySlides[i].classList.contains('fade') ) { //нашли интересующий класс
                mySlides[i].classList.remove('fade'); //удалили
            }
        }

        mySlides[currentSlide].classList.add('fade'); //добавили в соответсвии с нажатой кнопкой
        dot[currentSlide].classList.add('active');
        
    }
});

setInterval(rightClick, 5000);