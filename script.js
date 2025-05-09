let dinnersArr = [
    {
        "Mahlzeit": "erste Mahlzeit",
        "Preis": 5,
        "Beschreibung": "die Beschreibung vom Essen"
    },
    {
        "Mahlzeit": "zweite Mahlzeit",
        "Preis": 7,
        "Beschreibung": "die Beschreibung vom Essen"
    },
    {
        "Mahlzeit": "dritte Mahlzeit",
        "Preis": 11,
        "Beschreibung": "die Beschreibung vom Essen"
    },
    {
        "Mahlzeit": "vierte Mahlzeit",
        "Preis": 14,
        "Beschreibung": "die Beschreibung vom Essen"
    },
    {
        "Mahlzeit": "fünfte Mahlzeit",
        "Preis": 16,
        "Beschreibung": "die Beschreibung vom Essen"
    }
];

let basketMahlzeitArr = [];
let basketPreisArr = [];



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
    basketMahlzeitArr.push(dinnersArr[indexDinners].Mahlzeit);
    basketPreisArr.push(dinnersArr[indexDinners].Preis);
    renderBasketOrders();
};

function renderBasketOrders() {
    let basketOrder = document.getElementById('basket_order');
    basketOrder.innerHTML = '';
    for (let indexBasket = 0; indexBasket < basketMahlzeitArr.length; indexBasket++) {
        basketOrder.innerHTML += ` 
        <p class="text-white fs-3">${basketMahlzeitArr[indexBasket]}: ${basketPreisArr[indexBasket]}€</p>;
         `;
    };

    totalPriceOfOrders();
};

function totalPriceOfOrders() {
    let totalPrice = 0;
    for (let indexTotal = 0; indexTotal < basketPreisArr.length; indexTotal++) {
        totalPrice += basketPreisArr[indexTotal];

    }
    
    console.log(totalPrice);
}


