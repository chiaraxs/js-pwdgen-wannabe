// per far comparire la finestra di richiesta dati servirà il prompt //
// uso il camelcase per le variabili in modo da non avere problemi e rendere tutto più leggibile //

// 1. richiesta nome //
// creo variabile const non riassegnabile con sequenza stringa alfanumerica//

const userName = prompt('Inserisci il tuo nome');


// 2. richiesta cognome //
// creo variabile const non riassegnabile con sequenza stringa alfanumerica//

const userLastname = prompt('Inserisci il tuo cognome');

// 3. richiesta colore preferito //
// creo variabile const non riassegnabile con sequenza stringa alfanumerica//

const userFavouriteColour = prompt('Inserisci il tuo colore preferito');

// somma finale tra variabili //
// sommo i valori dati dall'utente per generare password, aggiungendo l'anno corrente //

let password = userName + userLastname + userFavouriteColour + '21'; 

// creo variabile let che si collega all'html -> id #password //
// grazie al div id #password e i dati rilasciati dall'utente, posso far stampare la password //

let htmlElement = document.getElementById('password');
htmlElement.innerHTML = `${password}`;