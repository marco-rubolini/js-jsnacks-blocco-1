//Chiedere all'utente di indicare un numero
var numeroUtente = parseInt(prompt("Indica un numero"));
console.log(numeroUtente);

//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente

for (var i = 0; i <= numeroUtente; i++) {
    var cubo = Math.pow(i,3);
    console.log(cubo);
    // var cubo = i  ** 3;
    // console.log(cubo);
}
