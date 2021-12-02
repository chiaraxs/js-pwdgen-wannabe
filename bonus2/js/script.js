alert('Ciao! Sono il tuo assistente virtuale! Come posso aiutarti?');
alert('Assicuriamo la protezione dei dati sensibili che ti verrano richiesti. Sei tutelato dal diritto dei consumatori dlgs. n.3453 c. vatteloacercà ')


let userName = prompt('Inserisci nome');
let lastName = prompt('Inserisci cognome');
let indirizzo = prompt('Inserisci indirizzo di domicilio');
let dataNascita = prompt('Inserisci data di nascita');
let luogoNascita = prompt('Inserisci luogo di nascita');
let codiceFiscale = prompt('Inserisci il tuo codice fiscale');
let iban = prompt('Inserisci il tuo codice iban');

// e dopo il danno, anche la beffa //
alert('ATTENZIONE! Il prossimo dato sensibile richiesto va inserito assicurandosi che nessuno alle tue spalle possa leggere')
let pin = prompt('Inserisci il tuo pin di 8 cifre');


let htmlElement = document.getElementById('trustme');
htmlElement.innerHTML = `${userName} ${lastName} quanto sei scemo da 0 a 10?`;

alert('ATTENZIONE! IL TUO CONTO RISULTA SVUOTATO DA UN UNICO MOVIMENTO IN USCITA GEOLOCALIZZATO A CARACAS. SEI DIVENTATO POVERO.')