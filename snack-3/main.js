/*Snack 3:*/
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
const voti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], bocciato = 5, promosso = 10;

/**
 * crea un nuovo array con i valori compresi tra min e max
 * utilizza il metodo filter()
 * @param {array} array 
 * @param {numero minimo} min 
 * @param {numero massimo} max 
 * @returns 
 */
function filtroConParametri(array, min, max) {
    const nuovoArray = array.filter((elemento) => {
        if (elemento > min && elemento < max) {
            return true;
        }
        return false;
    });
    console.log(nuovoArray);
    return nuovoArray;
};
filtroConParametri(voti, bocciato, promosso);

/* METODO FILTER */
const promossi = voti.filter((esame) => {
    if (esame > bocciato && esame <= promosso) {
        return true;
    }
    return false;
});
console.log(promossi);

/* METODO FOREACH */
voti.forEach((voto, i, voti) => {
    if (voto > 5) {
        console.log(voto + ' promosso 🤩');
    }

});