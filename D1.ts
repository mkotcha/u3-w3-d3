/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

console.log(
  "number - servono per contare, memorizzre numeri e fare operazioni su di essi\n",
  "string - utili per leggere e scrivere singole lettere o piu parole insieme\n",
  "boolean - possono assumere solo 2 valori, per esempio SI o NO, vero o falso, oppure zero o uno\n",
  "undefined - non è ancora chiaro cosa sono... possiamo decidere cosa diventeranno in un secondo momento\n",
  "null - possiamo vederli come scatole vuote senza nessuna indicazione su cosa dovrebbero contenere\n",
  "bigint - si unsano per lavorare su numeri molto, ma molto grandi\n",
  "object - sono un'inseme di numeri ed azioni che descrivono qualcosa, per esempio una macchina va a 100 all'ora (numero) e gira (azione)\n",
  "symbol - vengono usati per creare delle caratteristiche uniche che andranno ad aricchire la descrizione di oggetti\n"
);

console.log("****************************************************************");

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Matteo";

console.log("name = ", myName);

console.log("****************************************************************");

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

//console.log(12 + 20);

let z1 = 12 + 20;

console.log("12 + 20 = ", z1);

console.log("****************************************************************");

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x1 = 12;

console.log("x = ", x1);

console.log("****************************************************************");

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Falasca";
console.log("name = ", myName);

const nome = "Mario";

//nome = "Franco";

/* MALE MALE
  genera errore: TypeError: Assignment to constant variable.
*/

console.log("****************************************************************");

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log("4 - x = ", 4 - x1);

console.log("****************************************************************");

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

console.log("name1 = ", name1);
console.log("name2 = ", name2);

// console.log(name1 === name2);
// console.log(name1 === name2.toLowerCase());

console.log(name1 + " = " + name2 + " ? -> " + (name1 === name2 ? "vero" : "falso"));

console.log(name1 + " = " + name2.toLowerCase() + " ? -> " + (name1 === name2.toLowerCase() ? "vero" : "falso"));

console.log("name1 = ", name1);
console.log("name2 = ", name2);
