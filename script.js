let count = 0;

function increment() {
    count++;
    console.log("Huidige waarde: " + count);
}

setInterval(increment, 1000);  // elke seconde