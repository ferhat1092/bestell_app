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
            <button class="btn btn-dark" onclick="pushToBasket(${indexDinners})">In den Warenkorb</button>
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
    if (searchDinner) {                         // if (true) than added to the new amount + price
        searchDinner.amount++;
        searchDinner.Preis += dinnerObj.Preis; // whenever the button is clicked, the initial price is added to the new current price
    } else {
        basketArr.push({
            Mahlzeit: dinnerObj.Mahlzeit,
            Preis: dinnerObj.Preis,
            amount: dinnerObj.amount
        });
    }
    renderBasketOrders(indexDinners);
};

function popFromBasket(indexDinners) {
    // just like the pushtobasket function..  
    let dinnerObj = dinnersArr[indexDinners];
    let searchDinner = null;
    for (let indexSearch = 0; indexSearch < basketArr.length; indexSearch++) {   
        if (dinnerObj.Mahlzeit === basketArr[indexSearch].Mahlzeit) {
            searchDinner = basketArr[indexSearch];                     
            break;
        };
    }
    if (searchDinner) {                         
        searchDinner.amount--; // using -- instead of ++ to decrease
        searchDinner.Preis -= dinnerObj.Preis; // whenever the button is clicked, the initial price is REMOVED to the new current price
    } else {
        basketArr.pop({
            Mahlzeit: dinnerObj.Mahlzeit,
            Preis: dinnerObj.Preis,
            amount: dinnerObj.amount
        });
    }
    renderBasketOrders(indexDinners);
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
            }
        }

        basketOrder.innerHTML += `
            <p class="text-white fs-3">
                ${basketArr[indexBasket].Mahlzeit}: ${basketArr[indexBasket].Preis}€ 
                <button onclick="pushToBasket(${dinnerIndex})">+</button>
                x${basketArr[indexBasket].amount}
                <button onclick="popFromBasket(${dinnerIndex})">-</button>
            </p>
        `;
    }

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


