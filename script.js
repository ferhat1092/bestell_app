let dinnersArr = [
    {
        "Mahlzeit": "erste Mahlzeit",
        "Preis": 5,
        "Beschreibung": "die Beschreibung vom Essen",
        "amount": 1
    },
    {
        "Mahlzeit": "zweite Mahlzeit",
        "Preis": 7,
        "Beschreibung": "die Beschreibung vom Essen",
        "amount": 1
    },
    {
        "Mahlzeit": "dritte Mahlzeit",
        "Preis": 11,
        "Beschreibung": "die Beschreibung vom Essen",
        "amount": 1
    },
    {
        "Mahlzeit": "vierte Mahlzeit",
        "Preis": 14,
        "Beschreibung": "die Beschreibung vom Essen",
        "amount": 1
    },
    {
        "Mahlzeit": "fünfte Mahlzeit",
        "Preis": 16,
        "Beschreibung": "die Beschreibung vom Essen",
        "amount": 1
    }
];

let basketArr = [];

function init() {
    renderDinners();
};

function renderDinners() {
    let dinners = document.getElementById('dinners');
    dinners.innerHTML = '';
    for (let indexDinners = 0; indexDinners < dinnersArr.length; indexDinners++) {
        dinners.innerHTML += `
        <div class="card w-100 mb-2 bg-secondary">
            <h5 class="card-title text-white fs-1 text-center">${dinnersArr[indexDinners].Mahlzeit}</h5>
            <h6 class="card-subtitle text-muted">Preis: ${dinnersArr[indexDinners].Preis}€</h6>
            <p class="card-text">${dinnersArr[indexDinners].Beschreibung}</p>
            <button class="btn btn-dark" onclick="pushToBasket(${indexDinners})">In den Warenkorb</button>
        </div>
        `;
    };
};

function pushToBasket(indexDinners) {
    let dinner = dinnersArr[indexDinners];
    let searchDinner = null;
    for (let indexSearch = 0; indexSearch < basketArr.length; indexSearch++) {
        if (dinner.Mahlzeit === basketArr[indexSearch].Mahlzeit) {
            searchDinner = basketArr[indexSearch];
            break;
        }
    }
    if (searchDinner) {
        searchDinner.amount++;
        searchDinner.Preis++;
    } else {
        basketArr.push({
            Mahlzeit: dinner.Mahlzeit,
            Preis: dinner.Preis,
            amount: dinner.amount
        });
    }
    renderBasketOrders();
};

function renderBasketOrders() {
    let basketOrder = document.getElementById('basket_order');
    basketOrder.innerHTML = '';
    for (let indexBasket = 0; indexBasket < basketArr.length; indexBasket++) {
        basketOrder.innerHTML += `
        <p class="text-white fs-3">${basketArr[indexBasket].Mahlzeit}: ${basketArr[indexBasket].Preis}€ x${basketArr[indexBasket].amount}</p>
         `;
    };
    renderBasketTotalPrice();
};


function renderBasketTotalPrice() {
    let totalPrice = 0;
    let basketTotalPrice = document.getElementById('basket_total_price');
    basketTotalPrice.innerHTML = '';
    for (let indexTotal = 0; indexTotal < basketArr.length; indexTotal++) {
        totalPrice += basketArr[indexTotal].Preis;
        basketTotalPrice.innerHTML = `
        <p class="text-white fs-3">Gesamt: ${totalPrice}€</p>
        `;
    };
};


