const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        userSearch: '',
        show: false
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            console.log(product.id_product);
        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
    }
})

// class ProductList {
//     constructor(container = '.products') {
//         this.container = container;
//         this.goods = [];  //массив товаров из JSON документа
//         this.sum = [];
//         this._fetchProducts()
//             .then(data => {  // data - каждый объект JSON
//                 this.goods = [...data];
//                 this.insertIntoCatalog()
//             });
//     }

//     _fetchProducts() {
//         return fetch(`${API}/catalogData.json`)
//             .then(result => result.json())
//             .catch(error => {
//                 console.log(error);
//             })

//     }

//     /*
//      _fetchProducts2 - этот метод заполняет массив goods элементами (ручное заполнение массива)

//     _fetchProducts2() {
//         this.goods = [
//             { id: 1, title: 'Notebook', price: 2000 },
//             { id: 2, title: 'Mouse', price: 20 },
//             { id: 3, title: 'Keyboard', price: 200 },
//             { id: 4, title: 'Gamepad', price: 50 },
//         ];
//     }

//     */


//     getSum() {
//         let sum = 0;
//         this.goods.forEach(item => {
//             sum += item.price;
//         })
//     }

//     insertIntoCatalog() {
//         const block = document.querySelector(this.container);
//         for (let product of this.goods) {
//             const item = new ProductItem(product);
//             this.sum.push(item);
//             block.insertAdjacentHTML("beforeend", item.renderCatalog());
//             // block.innerHTML += item.render(); - альтернативный метод наполнения блока,но менее эффективный
//         }
//     }
// }


// class ProductItem {
//     constructor(item, img = 'https://via.placeholder.com/200x150') {
//         this.title = item.product_name;
//         this.id = item.id_product;
//         this.price = item.price;
//         this.img = img;
//     }

//     renderCatalog() {
//         return `<div class="product-item">
//                 <img src="${this.img}">
//                 <h3>${this.title}</h3>
//                 <p>${this.price}&#65284;</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
//     }
// }

// let list = new ProductList();

// class Basket {
//     constructor(container = '.cart-block') {
//         this.container = container;
//         this.goods = [];

//         this.clickBasket();
//         this.getBasketProduct()
//             .then(data => {
//                 this.goods = [...data.contents];
//                 this.insertBlock();
//             })
//     }

//     clickBasket() {
//         document.querySelector('.btn-cart').addEventListener('click', () => {
//             document.querySelector(this.container).classList.toggle('invisible');
//         })
//     }

//     getBasketProduct() {
//         return fetch(`${API}/getBasket.json`)
//             .then(result => result.json())
//             .catch(error => {
//                 console.log(error);
//             })

//     }

//     insertBlock() {
//         const block = document.querySelector(this.container);
//         for (let product of this.goods) {
//             const productObj = new OneElemBasket();
//             block.insertAdjacentHTML('beforeend', productObj.renderElem(product));
//         }

//     }
// }

// class OneElemBasket {

//     renderElem(product) {
//         return `<div class="cart-item" data-id="${product.id_product}">
//                     <div class="product-bio">
//                 <img src="${product.img}" alt="image">
//                     <div class="product-desc">
//                 <p class="product-title">${product.product_name}</p>
//                 <p class="product-count">Количество: ${product.quantity}</p>
//                 <p class="product-single-price">$${product.price} each</p>
//                     </div>
//                 </div>
//                 <div class="right-block">
//                     <p class="product-price">$${product.quantity * product.price}</p>
//                     <button class="del-btn" data-id="${product.id_product}">&#10006;</button> 
//                 </div>
//                 </div>`
//     }
// }

// let basket = new Basket();