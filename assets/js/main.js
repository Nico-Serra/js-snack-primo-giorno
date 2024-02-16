//console.log('ciao');

/*
Esercizio 1
Dichiara una variabile chiamata number e assegnale il valore 100. Stampa il valore della variabile in console.
number = 100; // number
*/

const number = 100;

console.log(number);

/*
Esercizio 2
Dichiara una costante chiamata PI e assegnale il valore di 3.14. Stampa il valore della costante in console.
PI = 3.14; // float
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

radius = 8 ; // number
radius (updated) = 8*2 ;// number
*/

let radius = 8;

console.log(radius);

radius = 8*2;

console.log(radius);

/////////////////////////////////////////////////////////////

const circle = (radius * PI);

console.log(circle);

/*
Esercizio 3
Dichiara una variabile chiamata name e
assegnale il valore "Carlo".
Successivamente, modifica il valore della variabile in "Marco".
Stampa il nuovo valore in console.

name = Carlo; // string
name (update) = Marco; // string
*/

let name = ('Carlo')

console.log(name);

name = ('Marco')

console.log(name);

/*
Esercizio 4
Dichiara una variabile chiamata temperature e assegnale il valore 22.5. Successivamente, aumenta il suo valore di 5 e stampa il nuovo valore in console.
temperatura = 22.5 // Float
temperatura (update) = 27.5 // Float
*/

let temperatura = 22.5;
console.log(temperatura);

temperatura = (22.5 + 5);
console.log(temperatura);

/*
Esercizio 5: Numeri
Rispondete in un commento a più righe: Che differenza c'è tra il numero 3.14 e 100 sono diversi? Perchè? Che tipo di dato è uno e che tipo di dato è l'altro?
(aiutatevi con una ricerca su google per allenare il vostro cerebro)

Il numero 3.14 è un numero decimale ovvero in programmazione è un Float mentre il numero 100 è un numero intero che in programmazione può essere definito number
*/

/*
Esercizio 6: console
Per scrivere dentro la nostra console utilizziamo la sua funzione .log() ma se scrivessimo console.info('Il mio messaggio') che differenza c'è? Perche?
Esistono altri metodi da usare con console. ?
(aiutatevi con una ricerca su internet per tennere allenate il vostro brain)


Entrambi restituiscono un messaggio alla console attraverso un metodo statico, ma a differenza di console.info che può essere una singola stringa, console.log può essere anche uno o più oggetti JavaScript
*/

console.info('Il mio messaggio')

/*
Esercizio 7: Differenza tra var e let
Scrivete un piccolo blocco di codice che utilizza un blocco if per vedere come var e let si comportano diversamente rispetto allo scope.
Non soffermatevi per ora sul significato di scope, vi verrà spiegato, è solo il limite di visibilità di una variabile.
if (true) {
    var variabileVar = "Sono definita con var";
    let variabileLet = "Sono definita con let";
}
console.log(variabileVar);
console.log(variabileLet);
Scrivete in un commento dopo i 2 console.log che cosa sta succedendo ...


*/

if (true) {
    var variabileVar = "Sono definita con var";
    let variabileLet = "Sono definita con let";
}
console.log(variabileVar);
console.log(variabileLet);
/*In questo caso la variabileLet non è definita perche non è soggetta a hoisting a differenza di variabileVar che lo è, ed ha quindi la capacità di essere letta prima di tutte le
variabili e le funzioni dichiarate nello script e consentirne l’uso anche prima della
dichiarazione stessa. Le funzioni potranno essere utilizzate, finché siamo all’interno dello stesso scope*/