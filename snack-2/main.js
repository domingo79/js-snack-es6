/*Snack2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.*/
const coppaItalia = [
    { nome: 'Milan', punti: 0, falliSubiti: 0 },
    { nome: 'Juventus', punti: 0, falliSubiti: 0 },
    { nome: 'Inter', punti: 0, falliSubiti: 0 },
    { nome: 'Napoli', punti: 0, falliSubiti: 0 },
    { nome: 'Roma', punti: 0, falliSubiti: 0 },
    { nome: 'Cagliari', punti: 0, falliSubiti: 0 },
]

//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
function numRnd(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
};

for (let i = 0; i < coppaItalia.length; i++) {
    const element = coppaItalia[i];
    element.punti = numRnd(1, 90);
    element.falliSubiti = numRnd(1, 90);
}
console.log(coppaItalia);

//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const nuovoArrey = { ...coppaItalia };
console.log(nuovoArrey);