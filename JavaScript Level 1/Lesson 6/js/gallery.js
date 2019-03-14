'use strict';


let smallImages = document.querySelectorAll('.small-images img'),
     lagreImages = document.querySelector('.large-images');

smallImages[0].addEventListener ('click', function() { 
    
    let img = document.createElement('img');
    img.src = 'img/L/bank.jpg';
    img.onload = () => {
        let x =  document.querySelector('.large-images > img');
        if (x) {lagreImages.removeChild(x);}
        lagreImages.appendChild(img);
    };
    img.onerror = () => {alert('Указанный путь до картинки не верный');};
});
smallImages[1].addEventListener ('click', function() { 
    let img = document.createElement('img');
    img.src = 'img/L/mountains.jpg';
    img.onload = () => {
        let x =  document.querySelector('.large-images > img');
        if (x) {lagreImages.removeChild(x);}
        lagreImages.appendChild(img);
    };
    img.onerror = () => {alert('Указанный путь до картинки не верный');};
});
smallImages[2].addEventListener ('click', function() { 
    let img = document.createElement('img');
    img.src = 'img/L/skyscraper.jpg';
    img.onload = () => {
        let x =  document.querySelector('.large-images > img');
        if (x) {lagreImages.removeChild(x);}
        lagreImages.appendChild(img);
    };
    img.onerror = () => {alert('Указанный путь до картинки не верный');};
});



////////////////////////////////////////////////////////////////////////////////
// //по клику на миниатюру меняется большая картинка, путем изменения с
// //display: none на display: block, плюс идет стравнение картинок по одинаковому atl


// let smallImages = document.querySelector('.small-images'),
//     lagreImages = document.querySelector('.large-images');

// smallImages.addEventListener('click', function(event) {
//     if (event.target && event.target.tagName == 'IMG') {
//         addImg (event.target.attributes.alt.value);
//     }
// });

// function addImg (alt) {
    
//     let largeImagesAll = lagreImages.querySelectorAll('img');

//     for (let i = 0; i < largeImagesAll.length; i++) {
//         let x = largeImagesAll[i].attributes.alt.value;
//         if (alt == x) {
//             largeImagesAll[i].style.display = 'block';


//         } else {
//             largeImagesAll[i].style.display = 'none';
            
//         }
//     }

// }
///////////////////////////////////////////////////////////////////////////////



