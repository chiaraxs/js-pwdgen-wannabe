// per far comparire la finestra di richiesta dati serve il prompt //
// uso il camelcase per le variabili in modo da non avere problemi e rendere tutto più leggibile //

// richiesta nome //
// creo variabile const non riassegnabile con sequenza stringa alfanumerica//

const userName = prompt('Inserisci il tuo nome');


// richiesta cognome //
// creo variabile const non riassegnabile con sequenza stringa alfanumerica//

const userLastname = prompt('Inserisci il tuo cognome');

// richiesta colore preferito //
// creo variabile const non riassegnabile con sequenza stringa alfanumerica//

const userFavouriteColour = prompt('Inserisci il tuo colore preferito');


// creo variabile let che si collega all'html -> id 'password //
// grazie al div id 'password' posso far stampare (far comparire nella pagina) la mia password //

let htmlElement = document.getElementById('password');
htmlElement.innerHTML = `ChiaraCardinalerosso21 ${userName} ${userLastname} ${userFavouriteColour}`;