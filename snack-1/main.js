/****Snack 1:*****/
//Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const BiciDaCorsa = [{ nome: 'Speedmax', peso: 1600 }, { nome: 'Aeroad', peso: 1400 }, { nome: 'Ultimate', peso: 1500 }, { nome: 'Inflite', peso: 1700 }];

console.log(BiciDaCorsa);

//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
let biciLeggera = BiciDaCorsa[0];

for (let i = 0; i < BiciDaCorsa.length; i++) {
    const elem = BiciDaCorsa[i];
    //bici con peso minore
    if (elem.peso < biciLeggera.peso) {
        biciLeggera = elem
    }
}

// destructuring di biciLeggera di nome e peso che mi interessano per la stampa
const { nome, peso } = biciLeggera

//mio markup
const markUp = document.getElementById('biciPiuma').innerHTML = `
<p>La bici più leggera è ${nome}, con i suoi ${peso} gr. </p>
`;