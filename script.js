let dinnersArr = [
    {
        "Mahlzeit": "erste Mahlzeit",
        "Preis": 8,
        "Beschreibung": "die Beschreibung vom Essen",
        "amount": 1
    },
    {
        "Mahlzeit": "zweite Mahlzeit",
        "Preis": 15,
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
            <button class="btn btn-dark" onclick="pushToBasket(${indexDinners})">+</button>
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
    let basketOrder = document.getElementById('basket_order');
    basketOrder.innerHTML = '';
    for (let indexBasket = 0; indexBasket < basketArr.length; indexBasket++) {
        let dinnerIndex = -1;
        for (let i = 0; i < dinnersArr.length; i++) {
            if (dinnersArr[i].Mahlzeit === basketArr[indexBasket].Mahlzeit) {
                dinnerIndex = i;
                break;
            };
        };
        let orderPrice = basketArr[indexBasket].Preis*basketArr[indexBasket].amount;
        basketOrder.innerHTML += `
            <p class="">
                ${basketArr[indexBasket].Mahlzeit}: ${orderPrice}€ 
                <button onclick="pushToBasket(${dinnerIndex})">+</button>
                x${basketArr[indexBasket].amount}
                <button onclick="spliceFromBasket(${dinnerIndex})">-</button>
                <button onclick="deleteBasketOrder(${indexBasket})">Löschen</button>

            </p>
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
    let basketTotalPrice = document.getElementById('basket_total_price');
    basketTotalPrice.innerHTML = '';
    for (let indexTotal = 0; indexTotal < basketArr.length; indexTotal++) {
        totalPrice += basketArr[indexTotal].Preis;
        basketTotalPrice.innerHTML = `
        <p class="">Gesamt: ${totalPrice}€</p>
        `;
    };
};


