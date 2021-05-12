/*Snack 3:*/
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

const voti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], bocciato = 5, promosso = 10;

//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
/* METODO FILTER */
const promossi = voti.filter((esame) => {
    if (esame > bocciato && esame <= promosso) {
        return true;
    }
    return false;
});
console.log(promossi);

//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
/* METODO FOREACH */
voti.forEach((voto, i, voti) => {
    if (voto > 5) {
        console.log(voto + ' promosso 🤩');
    }

});