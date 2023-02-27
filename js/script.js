/*
Scrivi un programma che stampi in console
i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz”
al posto del numero e per i multipli di 5 stamp
“Buzz”.
Per i numeri che sono sia multipli di 3 che di 5
stampi “FizzBuzz”.

BONUS 1: Crea un container nel DOM, 
aggiungendo (attraverso la funzione append()) 
un elemento html con il numero o la stringa 
corretta da mostrare.

BONUS 2: Applica stili differenti agli elementi 
aggiunti al DOM nel BONUS 1, 
a seconda che il valore inserito sia un numero, 
un fizz, un buzz o un fizzbuzz. 
Se sei a corto di idee per lo stile, 
potresti prendere spunto dallo screenshot 
fornito in consegna.

*/

/*

- Ripeti 100 volte
  °? SE il numero è sia multiplo di 3 che di 5
    - scrivi "FizzBuzz"
  :? ALTRIMENTI SE il numero è multiplo di 3
    - scrivi "Fizz"
  :? ALTRIMENTI SE il numero è multiplo di 5
    - scrivi "Buzz"
  : ALTRIMENTI
    - scrivi il numero

*/

// prendo il mio container

let containerElement = document.getElementById("container");


for (let i = 1; i <= 100; i++) {

  // instanziando una variabile che contiene un nuovo elemento HTML
  //  creato da noi
  let newElement = document.createElement('div');
  
  if (i % 3 == 0) {

    newElement.innerText = "Fizz";
    newElement.classList.add("fizz");

  }
  
  if (i % 5 == 0) {
    
    newElement.innerText += "Buzz";
    newElement.classList.add("buzz");
    
  }

  if(!newElement.innerText) {

    newElement.innerText = i;
    
  }
  
  // diciamo che il nostro newElement è figlio di containerElement
  containerElement.append(newElement);

}