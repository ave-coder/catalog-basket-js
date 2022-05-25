const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';



class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];  //массив товаров из JSON документа
        this._fetchProducts()
            .then(data => {  // data - каждый объект JSON
                this.goods = [...data];  // распаковываем JSON документ
                this.render()
            });
    }

    _fetchProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    /*
     _fetchProducts2 - этот метод заполняет массив goods элементами (ручное заполнение массива)

    _fetchProducts2() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }

    */

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            // block.innerHTML += item.render(); - альтернативный метод наполнения блока,но менее эффективный
        }
    }

    getSum() {
        let sum = 0;
        this.goods.forEach(item => {
            sum += item.price;
        })
    }
}

class ProductItem {
    constructor(item, img = 'https://via.placeholder.com/200x150') {
        this.title = item.product_name;
        this.id = item.id_product;
        this.price = item.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

class Basket {

    addGoods() {

    }

    removeGoods() {

    }

    render() {

    }
}

class OneElemBasket {

    render() {

    }
}