function pushToBasket(indexDinners) {
    let dinnerObj = dinnersArr[indexDinners];
    let searchDinner = basketArr.find(item => item.Mahlzeit === dinnerObj.Mahlzeit)
    if (searchDinner) {                         
        searchDinner.amount++;
    } else {
        basketArr.push({
            Mahlzeit: dinnerObj.Mahlzeit,
            Preis: dinnerObj.Preis,
            amount: 1
        });
    }
    renderBasketOrders();
};

function spliceFromBasket(indexDinners) {
    let dinnerObj = dinnersArr[indexDinners];
    let indexInBasket = basketArr.findIndex(item => item.Mahlzeit === dinnerObj.Mahlzeit)
    if (indexInBasket !== -1) {
        let objInBasket = basketArr[indexInBasket];
        objInBasket.amount --; 
        if (objInBasket.amount <= 0) {
            basketArr.splice(indexInBasket, 1);
        };
    };
    renderBasketOrders();
};

function deleteBasketOrder(indexBasket) {
    basketArr.splice(indexBasket, 1);
    renderBasketOrders();
};

function basketOrdersButton() {
    basketArr.length = 0;
    if (basketArr.length === 0) {
        basketTotalPrice.innerHTML = '<p>Deine Bestellung wurde aufgenommen. Vielen Dank!</p>';
        basketOrder.innerHTML = '';
        return;
    };
};

function toggleOverlay() {
    let overlay = document.getElementsByClassName('overlay')[0];
    overlay.classList.toggle('d-none');
};