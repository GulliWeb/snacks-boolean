// SNACKS BOOLEAN 

/* 1 - L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga. */

  const firstWord = prompt('Inserisci una parola')
  const secondWord = prompt('Inserisci un altra parola')

  if (!firstWord || !secondWord) {
    alert('Attenzione! inserire correttamente i valori nei campi!')
  }

// Controllo la parola più corta e la stampo per prima
firstWord.length > secondWord.length ? console.log(firstWord) : console.log(secondWord)



/* 2 - Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo) */

//  let num = []
//  let somma = 0
 
//  for (let i = 0; i < 5; i++) {
//   num[i] = parseInt(prompt('Inserisci un numero'))
//   somma = somma + num[i]
//  }
//  console.log(`La somma è: ${somma}`)



// 3 - Calcola la somma e la media dei primi 10 numeri.
// let num = []
// let somma = 0
// let media = 0

// for (let i = 1; i <= 10; i++) {
//   num[i] = i
//   somma += num[i]
//   media = somma / i
// }
// console.log(`La somma è: ${somma}`)
// console.log(`La media è: ${media}`)



/* 4 -  Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */

// Chiediamo all'utente di inserire un numero di 4 cifre
// let numero = prompt("Inserisci un numero di 4 cifre:");

// // Convertiamo l'input in un numero intero
// numero = parseInt(numero);

// // Inizializziamo una variabile per la somma
// let somma = 0;

// // Calcoliamo la somma delle cifre
// while (numero > 0) {
//   let cifra = numero % 10;
//   somma += cifra;
//   numero = Math.floor(numero / 10);
// }

// // Mostriamo il risultato all'utente
// console.log("La somma delle cifre è:", somma);

