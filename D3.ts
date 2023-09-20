const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/
console.log("1 - ************************************************************");

const characters = [];

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "starWarsCharacters" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

console.log("2 - ************************************************************");

for (let i = 0; i < starWarsCharacters.length; i++) {
  characters.push(starWarsCharacters[i].name);
}

console.log(characters);

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/

console.log("3 - ************************************************************");

const femaleCharacters = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female") {
    femaleCharacters.push(starWarsCharacters[i]);
  }
}

console.log(femaleCharacters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

console.log("4 - ************************************************************");

type EyeColor = {
  blue: object[];
  yellow: object[];
  brown: object[];
  red: object[];
  "blue-gray": object[];
};

const eyeColor: EyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  "blue-gray": [],
};

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/

console.log("5 - ************************************************************");

for (let i = 0; i < starWarsCharacters.length; i++) {
  switch (starWarsCharacters[i].eye_color) {
    case "blue":
      eyeColor.blue.push(starWarsCharacters[i]);
      break;
  }
  switch (starWarsCharacters[i].eye_color) {
    case "yellow":
      eyeColor.yellow.push(starWarsCharacters[i]);
      break;
  }
  switch (starWarsCharacters[i].eye_color) {
    case "brown":
      eyeColor.brown.push(starWarsCharacters[i]);
      break;
  }
  switch (starWarsCharacters[i].eye_color) {
    case "red":
      eyeColor.red.push(starWarsCharacters[i]);
      break;
  }
  switch (starWarsCharacters[i].eye_color) {
    case "blue-gray":
      eyeColor["blue-gray"].push(starWarsCharacters[i]);
      break;
  }
}

console.log(eyeColor);

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/

console.log("6 - ************************************************************");

const crewNumber = starWarsCharacters.length;
let count = 0;
let crewMass = 0;

while (count < crewNumber) {
  crewMass += starWarsCharacters[count].mass;
  count++;
}

console.log("crewMass =", crewMass);

/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

console.log("7 - ************************************************************");

if (crewMass > 1000) console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
else if (crewMass > 900) console.log("Critical Load: Over 900");
else if (crewMass > 700) console.log("Warning: Load is over 700");
else if (crewMass > 500) console.log("Ship is half loaded");
else if (crewMass <= 500) console.log("Ship is under loaded");

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

console.log("8 - ************************************************************");

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "n/a") {
    starWarsCharacters[i].gender = "robot";
  }
}

console.log(starWarsCharacters);

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/

console.log("9 - ************************************************************");

console.log(characters);

for (let i = 0; i < femaleCharacters.length; i++) {
  for (let j = 0; j < characters.length; j++) {
    if (femaleCharacters[i].name === characters[j]) {
      characters.splice(j, 1);
    }
  }
}

console.log(characters);

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/

console.log("10 - ***********************************************************");

let character = starWarsCharacters[Math.floor(Math.random() * starWarsCharacters.length)];

switch (character.name) {
  case "Luke Skywalker":
    console.log(
      "Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic Civil War during the reign of the Galactic Empire. Along with his companions, Princess Leia Organa and General Han Solo, Skywalker served as a revolutionary on the side of the Alliance to Restore the Republic—an organization committed to the downfall of the Galactic Empire and the restoration of democracy. Following the war, Skywalker became a living legend, and was remembered as one of the greatest Jedi in galactic history. "
    );
    break;
  case "C-3PO":
    console.log(
      "C-3PO (See-Threepio) was a 3PO-series protocol droid designed to interact with organics, programmed primarily for etiquette and protocol. Sometimes referred to as Threepio, he was fluent in over six million forms of communication, and developed a fussy and worry-prone personality throughout his many decades of operation. Along with his counterpart, the astromech droid R2-D2, C-3PO constantly found himself directly involved in pivotal moments of galactic history, and aided in saving the galaxy on many occasions. "
    );
    break;
  case "R2-D2":
    console.log(
      "R2-D2, pronounced Artoo-Detoo and often referred to as R2 (Artoo), was an R2-series astromech droid manufactured by Industrial Automaton with masculine programming. A smart, spunky droid who would serve a multitude of masters over his lifetime, R2-D2 was never given a full memory wipe nor did he ever receive new programming, with these factors resulting in an adventurous and independent attitude. Often finding himself in pivotal moments in galactic history, his bravery and ingenuity saved the galaxy on numerous occasions. "
    );
    break;
  case "Darth Vader":
    console.log(
      'Anakin Skywalker was a legendary Force-sensitive human male who was a Jedi Knight of the Galactic Republic and the prophesied Chosen One of the Jedi Order, destined to bring balance to the Force. Also known as "Ani" during his childhood, Skywalker earned the moniker "Hero With No Fear" from his accomplishments in the Clone Wars. His alter ego, Darth Vader, the Dark Lord of the Sith, was created when Skywalker turned to the dark side of the Force, pledging his allegiance to the Sith Lord Darth Sidious at the end of the Republic Era. '
    );
    break;
  case "Leia Organa":
    console.log(
      "Leia Skywalker Organa Solo was a Force-sensitive human Alderaanian female political, Jedi, and military leader who served in the Alliance to Restore the Republic during the Imperial Era and the New Republic and Resistance in the subsequent New Republic Era. Shortly after birth, she was adopted into the House of Organa—the Alderaanian royal family—and was raised as Princess Leia Organa of Alderaan, a planet in the Core Worlds known for its dedication to pacifism. The princess was raised as the daughter of Senator Bail Prestor Organa and his wife, Queen Breha Organa, making her the heir to the Alderaanian monarchy. Instilled with the values of her adopted homeworld, Organa devoted her life to the restoration of democracy by opposing authoritarian regimes, such as the Galactic Empire and the First Order. "
    );
    break;
  case "Owen Lars":
    console.log(
      "Owen Lars was a human male from the desert planet Tatooine who worked as a moisture farmer. He was the son of Aika and Cliegg Lars, and he became the stepbrother of Jedi Knight Anakin Skywalker when Cliegg married Anakin's mother, Shmi Skywalker. In 22 BBY, Shmi was killed by Tusken Raiders, and Cliegg passed away soon after. Lars married his girlfriend, Beru Whitesun, and they toiled to maintain the homestead. "
    );
    break;
  case "Beru Whitesun lars":
    console.log(
      "Beru Whitesun Lars, born Beru Whitesun, was a human female from the planet Tatooine. She was married to Owen Lars, the stepbrother of Jedi Knight Anakin Skywalker, the Chosen One, whose son, Luke, they raised after his father turned to the dark side of the force and his mother died in childbirth. "
    );
    break;
  case "R5-D4":
    console.log(
      'R5-D4, also referred to as R5 (Arfive) and called "Red" by Luke Skywalker, was a red and white-striped R5 astromech droid owned by a group of Jawas on Tatooine in the early days of the Galactic Civil War. Shortly before the Battle of Yavin, the Jawas attempted to sell him to Owen Lars, but the droid purposely malfunctioned his motivator at the advice of R2-D2, so that Lars could purchase R2-D2 in R5-D4\'s place. The droid survived an Imperial attack on the sandcrawler soon after, and went out to find the Rebellion. R5 was still active by the time of the New Republic Era, and eventually came into the service of Mos Eisley hangar manager Peli Motto. He was later sold to the Mandalorian Din Djarin for his mission to the Living Waters of Mandalore. '
    );
    break;
  case "Biggs Darklighter":
    console.log(
      "Biggs Darklighter was a human male ace pilot who fought for the Alliance to Restore the Republic during the early days of the Galactic Civil War. He grew up on the desert world of Tatooine, where he became a close boyhood friend of Luke Skywalker. The two became pilots and dreamed of leaving Tatooine. Darklighter left his homeworld for the Imperial Academy, but defected from the Galactic Empire after graduation in order to join the Rebel Alliance. He returned to Tatooine one final time to tell Skywalker of his plans. "
    );
    break;
  case "Obi-Wan Kenobi":
    console.log(
      "Obi-Wan Kenobi was a legendary Force-sensitive human male Jedi Master who served on the Jedi High Council during the final years of the Republic Era. As a Jedi General, Kenobi served in the Grand Army of the Republic that fought against the Separatist Droid Army during the Clone Wars. Kenobi, however, was forced into exile as a result of the Great Jedi Purge. As a mentor, Kenobi was responsible for training two members of the Skywalker family, Anakin and Luke Skywalker, both of whom served in turn as his Padawan in the ways of the Force. "
    );
    break;
}

// console.log(
//   `${character.name}, gender: ${character.gender}, birth: ${character.birth_year}, height: ${character.height},`,
//   character.hair_color !== "none" && character.hair_color !== "n/a" ? `hair color: ${character.hair_color},` : "",
//   `skin color: ${character.skin_color}, eye color: ${character.eye_color}`
// );
