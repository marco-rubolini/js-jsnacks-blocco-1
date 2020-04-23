//Stampa le potenze di 2 fino a 1000
var massimoRisultato = 1000;
console.log(massimoRisultato);


 for (var i = 0; i < massimoRisultato; i++) {
     var potenze = Math.pow (2, i);
     if (potenze <= massimoRisultato) {
         console.log(potenze);
     }
 }
