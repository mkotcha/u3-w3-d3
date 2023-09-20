"use strict";
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/
/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
const printArray = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
    }
};
printArray(pets);
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const sortArray = function (arr) {
    let arrReverse = arr.sort();
    return arr;
};
printArray(sortArray(pets));
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const sortArrayReverse = function (arr) {
    let arrReverse = arr.sort().reverse();
    return arr;
};
printArray(sortArrayReverse(pets));
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const firstToLast = function (arr) {
    let item = arr.shift();
    if (item) {
        arr.push(item);
    }
    return arr;
};
printArray(firstToLast(pets));
const cars = [
    {
        brand: "Ford",
        model: "Fiesta",
        color: "red",
        trims: ["titanium", "st", "active"],
    },
    {
        brand: "Peugeot",
        model: "208",
        color: "blue",
        trims: ["allure", "GT"],
    },
    {
        brand: "Volkswagen",
        model: "Polo",
        color: "black",
        trims: ["life", "style", "r-line"],
    },
];
const addKey = function (keyName, value, obj) {
    for (let i = 0; i < obj.length; i++) {
        obj[i][keyName] = value;
    }
    return obj;
};
addKey("LicensePlate", "not set", cars);
// const addKey = function (value: string, obj: Cars[]) {
//   for (let i = 0; i < obj.length; i++) {
//     obj[i].licensePlate = value;
//   }
//   return obj;
// };
// addKey("not set", cars);
printArray(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const addToCars = function (brand, model, color, trims, licensPlate) {
    const item = {
        brand: brand,
        model: model,
        color: color,
        trims: trims,
        LicensePlate: licensPlate,
    };
    cars.push(item);
};
addToCars("Lancia", "Stratos", "Alitalia", ["fast", "Rally"], "no need");
// printArray(cars);
const removeLastTrim = function () {
    for (let i = 0; i < cars.length; i++) {
        cars[i].trims.pop();
    }
};
removeLastTrim();
// printArray(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
const getFirstTrim = function () {
    for (let i = 0; i < cars.length; i++) {
        const element = cars[i].trims[0];
        justTrims.push(element);
    }
};
getFirstTrim();
// console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
const fizzBuzz = function () {
    for (let i = 0; i < cars.length; i++) {
        const element = cars[i].color[0];
        if (element === "b") {
            console.log("Fizz");
        }
        else {
            console.log("Buzz");
        }
    }
};
// fizzBuzz();
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
const printUntilNum = function (num) {
    let count = 0;
    while (count < numericArray.length) {
        console.log(numericArray[count]);
        if (numericArray[count] === num) {
            break;
        }
        count++;
    }
};
// printUntilNum(32);
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const charToNum = function (array) {
    const arrayNum = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i].toLowerCase();
        switch (element) {
            case "a":
                arrayNum.push(1);
                break;
            case "b":
                arrayNum.push(2);
                break;
            case "c":
                arrayNum.push(3);
                break;
            case "d":
                arrayNum.push(4);
                break;
            case "e":
                arrayNum.push(5);
                break;
            case "f":
                arrayNum.push(6);
                break;
            case "g":
                arrayNum.push(7);
                break;
            case "h":
                arrayNum.push(8);
                break;
            case "i":
                arrayNum.push(9);
                break;
            case "l":
                arrayNum.push(10);
                break;
            case "m":
                arrayNum.push(11);
                break;
            case "n":
                arrayNum.push(12);
                break;
            case "o":
                arrayNum.push(13);
                break;
            case "p":
                arrayNum.push(14);
                break;
            case "q":
                arrayNum.push(15);
                break;
            case "r":
                arrayNum.push(16);
                break;
            case "s":
                arrayNum.push(17);
                break;
            case "t":
                arrayNum.push(18);
                break;
            case "u":
                arrayNum.push(19);
                break;
            case "v":
                arrayNum.push(20);
                break;
            case "z":
                arrayNum.push(21);
                break;
            default:
                break;
        }
    }
    return arrayNum;
};
const numberArray = charToNum(charactersArray);
printArray(numberArray);
