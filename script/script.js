let basketArr = [];
const deliveryCosts = 5;
let basketTotalPrice = document.getElementById('basket_total_price');
let basketOrder = document.getElementsByClassName('basket_order')[0];


function init() {
    renderDinners();
};

function renderDinners() {
    let dinners = document.getElementById('dinners');
    dinners.innerHTML = dinnersArr.map((item, indexDinners) => getDinnersTemplates(item, indexDinners)).join('')
};

function renderBasketOrders() {
    basketOrder.innerHTML = basketArr.map((basketItem, indexBasket) => {
        let dinnerIndex = dinnersArr.findIndex(item => item.Mahlzeit === basketItem.Mahlzeit);
        let orderPrice = (basketItem.Preis * basketItem.amount).toFixed(2);
        return getBasketOrderTemplates(indexBasket, basketItem, dinnerIndex, orderPrice);
    }).join('');
    renderBasketTotalPrice();
};

function renderBasketTotalPrice() {
    let totalPrice = 0;
    if (basketArr.length === 0) {               
        basketTotalPrice.innerHTML = '';
    } else {
        basketTotalPrice.innerHTML = '';
        for (let indexTotal = 0; indexTotal < basketArr.length; indexTotal++) {
            totalPrice += basketArr[indexTotal].Preis * basketArr[indexTotal].amount;
        }
        basketTotalPrice.innerHTML = getBasketTotalPriceTemplates(deliveryCosts, totalPrice);
    };
};