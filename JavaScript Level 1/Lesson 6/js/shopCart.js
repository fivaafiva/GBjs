'use strict';

let cart = [], //массив объектов, (база корзины)
    x = 0;
addToCart();


function addToCart() {
    let productItem = document.querySelectorAll('.product-item');


    class ProductInCart {  //создаем объекты через конструктор
        constructor (name, price) {
            this.name = name;
            this.price = price;
        }
    }

    productItem.forEach(function(item, i) { //перебираем узел карточек товара
        productItem[i].addEventListener('click', function(event) { //делегирование событий, карточка товара, кнопка купить
            if (event.target && event.target.className == 'button') {
                let productName =  productItem[i].querySelector('h3').textContent, //выдергиваем текст 
                    productPrice =  productItem[i].querySelector('.price').textContent;
                productPrice = Number( productPrice.replace(/[^\d]/g, '') ); //техст с ценой заменяем на числа
                let product = new ProductInCart (productName, productPrice); //создаем новый объект

                cart.push(product); //пушим объект в массив

                checkCart();

            }
        });
    });

}

function checkCart() { //добавление товаров в поле с корзиной

    let cartContainLeft = document.querySelector('.cart-container-left-side'),
        cartItem = document.createElement('div'),
        cartItemName = document.createElement('span'),
        cartItemPrice = document.createElement('span'),
        cartTotalPrice = document.querySelector('.cart-container-right-side span');

    cartItem.classList.add('cart-item');
    cartContainLeft.appendChild(cartItem);

    

    for (let i = 0; i <= cart.length; i++) { //перебираем массив объектов
        if (i == cart.length) { //добавляем последний объект в корзину!
            cartItemName.classList.add('cart-item-name');
            cartItemName.textContent = cart[i-1].name;
            cartItem.appendChild(cartItemName);
            cartItemPrice.classList.add('cart-item-price');
            cartItemPrice.textContent = cart[i-1].price + ' Rub';
            cartItem.appendChild(cartItemPrice);
            x += cart[i-1].price;
            cartTotalPrice.textContent = 'Итого: ' + x;
        }
    }

}

