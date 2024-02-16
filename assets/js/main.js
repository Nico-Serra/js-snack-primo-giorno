//console.log('ciao');

/*
Esercizio 1
Dichiara una variabile chiamata number e assegnale il valore 100. Stampa il valore della variabile in console.
*/

const number = 100;

console.log(number);

/*
Esercizio 2
Dichiara una costante chiamata PI e assegnale il valore di 3.14. Stampa il valore della costante in console.
*/

const PI = 3.14;

console.log(PI);

/*
Esercizio 2/B
Prova ad assegnare alla costante chiamata PI il valore di 3.1416. Sai dire cosa succede?
    -Per poter dare il valore 3.1416 dovrei cambiare la mia variabile anzichè utilizzare (const) utilizzerei la variabile (let), poichè la variabile (const) non è riassegnabile e mi darebbe l'errore "Uncaught SyntaxError: Identifier 'PI' has already been declared"

*/

/*const PI = 3.1416;

console.log(PI);*/

/*
Esercizio 2/C
Dichiara una variabile chiamata radius e assegnale il valore 8.
Moltiplica radius x 2 e x PI e assegna il valore a una variabile di nome circle.
Stampa il valore della variabile circle in console.
*/

let radius = 8

console.log(radius);

radius = 8*2;

console.log(radius);



const circle = (radius * PI)

console.log(circle);

