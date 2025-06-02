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