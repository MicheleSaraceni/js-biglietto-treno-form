/* Scrivere un programma che chieda all’utente:

- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

"use strict";
console.clear();

//dati e var
const priceKm = 0.21;
const juniorDiscount = 20;
const juniorAge = 18;
const seniorDiscount = 40;
const seniorAge = 65;
const kminput = document.getElementById("km");
const ageinput = document.getElementById("age");
const myButton = document.querySelector(".btn");

let km = 0;
let age = 0;

function dati() {
km = kminput.value;
age = ageinput.value;
}



myButton.addEventListener("click", dati);

//calcolo prezzo al km
let price = km * priceKm;

//prendo l'elemento dove va inserito il messaggio segurente
const details = document.querySelector("details");
console.log (details);
details.innerHTML = "Il prezzo del suo bigliettoè: " + Math.round(price * 100) / 100 + "€<br>" + details;

let discount = 0.00;

if (age.value < juniorAge){
    discount = price * 20 / 100;
    price = price - discount;
    console.log ("Per via della sua età sul suo biglietto verrà applicato uno sconto di " + Math.round(discount * 100) / 100 + "€, pertanto il prezzo finale del suo biglietto è di: " + Math.round(price * 100) / 100 + "€");
} else if(age.value >= seniorAge){
    discount = price * 40 / 100;
    price = price - discount;
    console.log ("Per via della sua età sul suo biglietto verrà applicato uno sconto del " + Math.round(discount * 100) / 100 + "€, pertanto il prezzo finale del suo biglietto è di: " + Math.round(price * 100) / 100 + "€");
} else{
    console.log ("Ci dispiace informarla che per via della sua età il costo del suo biglietto rimarra invariato non potendo usufruire di alcuno sconto, pertanto il prezzo del suo biglietto è di: " + Math.round(price * 100) / 100 + "€");
}

