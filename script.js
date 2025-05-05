let dinnersArr = [
    {
        "Mahlzeit":"erste Mahlzeit",
        "Preis":5,
        "Beschreibung": "die Beschreibung vom Essen" 
    },
    {
        "Mahlzeit":"zweite Mahlzeit",
        "Preis":7,
        "Beschreibung": "die Beschreibung vom Essen" 
    },
    {
        "Mahlzeit":"dritte Mahlzeit",
        "Preis":11,
        "Beschreibung": "die Beschreibung vom Essen" 
    },
    {
        "Mahlzeit":"vierte Mahlzeit",
        "Preis":14,
        "Beschreibung": "die Beschreibung vom Essen" 
    },
    {
        "Mahlzeit":"fünfte Mahlzeit",
        "Preis":16,
        "Beschreibung": "die Beschreibung vom Essen" 
    }
];

function init()  {
    renderDinners();
};

function renderDinners() {
    let dinners = document.getElementById('dinners');
    dinners.innerHTML = '';
    for (let indexDinners = 0; indexDinners < dinnersArr.length; indexDinners++) {
        dinners.innerHTML += dinnersArr[indexDinners];
    }
};
