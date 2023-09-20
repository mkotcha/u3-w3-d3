"use strict";
/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const a = 10, b = 15;
console.log(`a = ${a}\nb = ${b}`);
if (a > 10) {
    console.log(`${a} > ${b}`);
}
else {
    console.log(`${b} > ${a}`);
}
console.log("****************************************************************");
/* ESERCIZIO 2
Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let l = 5, m = 10;
if (l !== 5) {
    console.log(`${l} not equal to 5`);
}
if (m !== 5) {
    console.log(`${m} not equal to 5`);
}
console.log("****************************************************************");
/* ESERCIZIO 3
Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero
fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const i = 13, j = 25;
if (i % 5 === 0)
    console.log(`${i} è divisibile per 5`);
if (j % 5 === 0)
    console.log(`${j} è divisibile per 5`);
console.log("****************************************************************");
/* ESERCIZIO 4
Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno
di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let r = 3, s = 5;
if (r === 8 || s === 8) {
    if (r === 8) {
        console.log("r è uguale a 8");
    }
    else {
        console.log("s è uguale a 8");
    }
}
else {
    if (r + s === 8)
        console.log("la somma di r ed s è uguale a 8");
    if (r - s === 0)
        console.log("la sottrazione di r ed s è uguale a 0 (sono lo stersso numero)");
}
console.log("****************************************************************");
const cart = {
    itemsPrice: [12, 24, 8, 10],
};
// calcola la somma di tutti i valori di un array
cart.partialTotal = cart.itemsPrice.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
console.log(`Total without shipping cost ${cart.partialTotal}`);
if (cart.partialTotal > 50) {
    console.log(`Free shipping`);
    cart.totalShoppingCart = cart.partialTotal;
}
else {
    console.log("caccia la moneta!");
    cart.totalShoppingCart = cart.partialTotal + 10;
}
console.log(`Total ${cart.totalShoppingCart}`);
console.log("****************************************************************");
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene
  applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione
  nell'algoritmo, determinando come prima se le spedizioni sono gratuite
  oppure no e e calcolando il totale.
*/
cart.partialTotal = cart.partialTotal * 0.8;
console.log("Black Friday sale! - Total without shipping cost", cart.partialTotal);
if (cart.partialTotal > 50) {
    console.log(`Free shipping`);
    cart.totalShoppingCart = cart.partialTotal;
}
else {
    console.log("caccia la moneta!");
    cart.totalShoppingCart = cart.partialTotal + 10;
}
console.log(`Total ${cart.totalShoppingCart}`);
console.log("****************************************************************");
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo
  il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let x = 51, y = 165, z = 123;
if (x > y) {
    if (y > z) {
        console.log(x, y, z);
    }
    else {
        if (z > x) {
            console.log(z, x, y);
        }
        else
            console.log(x, z, y);
    }
}
else {
    if (y > z) {
        if (z > x) {
            console.log(y, z, x);
        }
        else {
            console.log(y, x, z);
        }
    }
    else {
        console.log(z, y, x);
    }
}
console.log("****************************************************************");
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no
  (suggerimento: cerca su un motore di ricerca "typeof").
*/
let unknown = "5";
if (typeof unknown === "number") {
    console.log(unknown, "è un numero");
}
else {
    console.log(unknown, "non è un numero");
}
console.log("****************************************************************");
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const xx = 11;
if (xx % 2 === 0)
    console.log(xx, " è pari");
else
    console.log(xx, " è dispari");
console.log("****************************************************************");
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il
  messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 3;
if (val < 10 && val >= 5) {
    console.log("Meno di 10");
}
else if (val < 5) {
    console.log("Meno di 5");
}
else {
    console.log("Uguale a 10 o maggiore");
}
console.log("****************************************************************");
const me = {
    name: "John",
    lastName: "Doe",
    skills: ["javascript", "html", "css"],
};
console.log(me);
me.city = "Toronto";
console.log(me);
console.log("****************************************************************");
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per
  rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me);
console.log("****************************************************************");
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per
  rimuovere l'ultimo elemento della proprietà "skills".
*/
console.log(me.skills);
me.skills.pop();
console.log(me.skills);
console.log("****************************************************************");
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo
  successivamente con i numeri da 1 a 10.
*/
const myArray = [];
console.log(myArray);
myArray[0] = 11;
for (let k = 0; k < 10; k++) {
    myArray[k] = k + 1;
}
console.log(myArray);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array,
  ovvero il valore 10, con il valore 100.
*/
console.log("****************************************************************");
console.log(myArray[9]);
if (myArray[myArray.length - 1] === 10)
    myArray[9] = 100;
console.log(myArray[9]);
