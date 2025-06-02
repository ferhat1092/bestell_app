let basketArr = [];
const deliveryCosts = 5;
let basketTotalPrice = document.getElementById('basket_total_price');
let basketOrder = document.getElementsByClassName('basket_order')[0];


function init() {
    renderDinners();
};

function renderDinners() {
    let dinners = document.getElementById('dinners');
    dinners.innerHTML = '';
    for (let indexDinners = 0; indexDinners < dinnersArr.length; indexDinners++) {
        dinners.innerHTML += getDinnersTemplates(indexDinners);
    };
};

function renderBasketOrders() {
    basketOrder.innerHTML = '';
    for (let indexBasket = 0; indexBasket < basketArr.length; indexBasket++) {
        let dinnerIndex = -1;
        for (let i = 0; i < dinnersArr.length; i++) {
            if (dinnersArr[i].Mahlzeit === basketArr[indexBasket].Mahlzeit) {
                dinnerIndex = i;
                break;
            };
        };
        let orderPrice = (basketArr[indexBasket].Preis * basketArr[indexBasket].amount).toFixed(2);
        basketOrder.innerHTML += getBasketOrderTemplates(indexBasket, dinnerIndex, orderPrice);
    };
    renderBasketTotalPrice();
};

function renderBasketTotalPrice() {
    let totalPrice = 0;
    if (basketArr.length === 0) {               // if basket empty than delete totalprice too
        basketTotalPrice.innerHTML = '';
    } else {
        basketTotalPrice.innerHTML = '';
        for (let indexTotal = 0; indexTotal < basketArr.length; indexTotal++) {
            totalPrice += basketArr[indexTotal].Preis * basketArr[indexTotal].amount;
        }
        basketTotalPrice.innerHTML = getBasketTotalPriceTemplates(deliveryCosts, totalPrice);
    };
};