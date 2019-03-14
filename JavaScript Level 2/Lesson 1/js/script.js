'use strict';
const goods = [
    {title: 'Shirt', price: 150, 
    text: 'Some quick example text to build on the card', 
    img: 'https://via.placeholder.com/320x180'},

    {title: 'Socks', price: 50,
    text: 'Some quick example text to build on the card', 
    img: 'https://via.placeholder.com/320x180'},

    {title: 'Jacket', price: 350,
    text: 'Some quick example text to build on the card', 
    img: 'https://via.placeholder.com/320x180'},

    {title: 'Shoes', price: 250,
    text: 'Some quick example text to build on the card', 
    img: 'https://via.placeholder.com/320x180'},
    
    {title: 'Hat', price: 100,
    text: 'Some quick example text to build on the card', 
    img: 'https://via.placeholder.com/320x180'}
];

const renderGoodsItem = (title = 'null', price = 0, text = 'Some text', img = '#') => { 
    //значения по умолчанию устанавливаются таким образом
    return `<div class="card">
                <img class="card-img-top" src="${img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${text}</p>
                    <div class="cart-btn-price-wrap">
                        <a href="#" class="btn btn-primary">Add to cart</a>
                        <p class="cart-price">${price}$</>
                    </div>
                </div>
            </div>`
};

const renderGoodsList = list => {
    const goodsList = list.map(item => {
        return renderGoodsItem(item.title, item.price, item.text, item.img);
   });
   document.querySelector('.goods-list').innerHTML = goodsList.join('');
   //удалить запятые можно с помощью метода .join()
};

window.onload = () => {
    renderGoodsList(goods);
};