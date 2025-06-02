function getDinnersTemplates(indexDinners) {
    return `
        <div class="card">
        <div>
            <h3 class="card-title">${dinnersArr[indexDinners].Mahlzeit}</h3>
            <h6 class="card-subtitle">Preis: ${dinnersArr[indexDinners].Preis.toFixed(2).replace('.', ',')}€</h6>
            <p class="card-text d-none">${dinnersArr[indexDinners].Beschreibung}</p>
        </div>
        <div>    
            <button class="" onclick="pushToBasket(${indexDinners})">+</button>
        </div>    
        </div>
        `;
};

function getBasketOrderTemplates(indexBasket, dinnerIndex, orderPrice) {
    return `
            <div class="orders">
                <div class="orders-content">
                <h3> ${basketArr[indexBasket].Mahlzeit} <h6>${orderPrice.replace('.', ',')}€</h6></h3> 
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

function getBasketTotalPriceTemplates(deliveryCosts, totalPrice) {
    return `
        <div class="total-price">
        <h6>zzgl. Lieferkosten: ${deliveryCosts.toFixed(2).replace('.', ',')}€</h6>
        <h4>Gesamt: ${(totalPrice + deliveryCosts).toFixed(2).replace('.', ',')}€</h4>
        </div>
        <button class="btn-order" onclick="basketOrdersButton()">Bestellen</button>
        `;
};