let dinnersArr = [
    {
        "Mahlzeit": "Döner",
        "Preis": 8.50,
        "Beschreibung": "Dönertasche mit Kalbfleisch und Salat",
        "amount": 1
    },
    {
        "Mahlzeit": "Dönerteller",
        "Preis": 15.99,
        "Beschreibung": "Dönerteller mit Kalbfleisch, Salat und Pommes",
        "amount": 1
    },
    {
        "Mahlzeit": "Döner überbacken",
        "Preis": 11.50,
        "Beschreibung": "Döner(Kalbfleisch) mit Käse überbacken",
        "amount": 1
    },
    {
        "Mahlzeit": "Dürüm",
        "Preis": 14.99,
        "Beschreibung": "Dürümdöner mit Kalbfleisch und Salat",
        "amount": 1
    },
    {
        "Mahlzeit": "Iskender",
        "Preis": 16.50,
        "Beschreibung": "Dönerfleisch(Kalbfleisch) mit Joghurt, Tomatensauce und frittiertem Brot",
        "amount": 1
    }
];

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
        dinners.innerHTML += `
        <div class="card">
        <div>
            <h3 class="card-title">${dinnersArr[indexDinners].Mahlzeit}</h5>
            <h6 class="card-subtitle">Preis: ${dinnersArr[indexDinners].Preis.toFixed(2).replace('.',',')}€</h6>
            <p class="card-text">${dinnersArr[indexDinners].Beschreibung}</p>
        </div>
        <div>    
            <button class="" onclick="pushToBasket(${indexDinners})">+</button>
        </div>    
        </div>
        `;
    };
};

function pushToBasket(indexDinners) {
    // writing the function so that "Mahlzeit" appears once !!
    let dinnerObj = dinnersArr[indexDinners];
    let searchDinner = null;
    for (let indexSearch = 0; indexSearch < basketArr.length; indexSearch++) {   // iteration to searching if .Mahlzeit existing
        if (dinnerObj.Mahlzeit === basketArr[indexSearch].Mahlzeit) {
            searchDinner = basketArr[indexSearch];                      // searchDinner = became "true" if basket.mahlzeit === dinnerObj.Mahlzeit
            break;
        };
    }
    if (searchDinner) {                         // if (true) than added to the new amount 
        searchDinner.amount++;
    } else {
        basketArr.push({
            Mahlzeit: dinnerObj.Mahlzeit,
            Preis: dinnerObj.Preis,
            amount: dinnerObj.amount
        });
    }
    renderBasketOrders();
};

function spliceFromBasket(indexDinners) {
    // just like the pushtobasket function..  
    let dinnerObj = dinnersArr[indexDinners];
    let searchDinner = null;
    let indexSearch = -1;

    for (let i = 0; i < basketArr.length; i++) {
        if (dinnerObj.Mahlzeit === basketArr[i].Mahlzeit) {
            searchDinner = basketArr[i];
            indexSearch = i;
            break;
        };
    };

    if (searchDinner) {
        searchDinner.amount--; // using -- instead of ++ to decrease
        if (searchDinner.amount <= 0) {
            basketArr.splice(indexSearch, 1);
        };
    };
    renderBasketOrders();
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
        basketOrder.innerHTML += `
            <div class="orders">
                <div class="orders-content">
                <h3> ${basketArr[indexBasket].Mahlzeit} <h6>${orderPrice.replace('.',',')}€</h6></h3> 
                   <button onclick="pushToBasket(${dinnerIndex})">+</button>
                       ${basketArr[indexBasket].amount}
                      <button onclick="spliceFromBasket(${dinnerIndex})">-</button>
                </div>      
                <div class="delete-btn-container">
                    <button onclick="deleteBasketOrder(${indexBasket})">x</button>
                </div>
            </div>
        `;
    };

    renderBasketTotalPrice();
};

function deleteBasketOrder(indexBasket) {
    basketArr.splice(indexBasket, 1);
    renderBasketOrders();
};

function renderBasketTotalPrice() {
    let totalPrice = 0;
    
    basketTotalPrice.innerHTML = '';
    for (let indexTotal = 0; indexTotal < basketArr.length; indexTotal++) {
        totalPrice += basketArr[indexTotal].Preis * basketArr[indexTotal].amount;
    }
    basketTotalPrice.innerHTML = `
        <div class="total-price">
        <h6>zzgl. Lieferkosten: ${deliveryCosts.toFixed(2).replace('.',',')}€</h6>
        <h4>Gesamt: ${(totalPrice + deliveryCosts).toFixed(2).replace('.',',')}€</h4>
        </div>
        <button class="btn-order" onclick="basketOrdersButton()">Bestellen</button>
        `;
};

function basketOrdersButton() {
    basketArr.length = 0;

    if (basketArr.length === 0) {
        basketTotalPrice.innerHTML = '<p>Deine Bestellung wurde aufgenommen. Vielen Dank!</p>';
        basketOrder.innerHTML = '';
        return;
    };

};


