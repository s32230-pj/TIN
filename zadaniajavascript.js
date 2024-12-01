
/* ZADANIE 1
function czyTrojkaPitagorajska (a,b,c){
    
    let liczby = [a, b, c];
    liczby.sort((a, b) => a - b);
    
    if (liczby[0]*liczby[0] + liczby[1] * liczby[1] == liczby [2] * liczby [2]){
        console.log(liczby + " tworzą trójkę pitagorejską");
    }
    else{
        console.log(liczby + " nie tworzą trójki pitagorejskiej");
    }
    
    
    
    
}

czyTrojkaPitagorajska(3,4,5);
czyTrojkaPitagorajska(5,12,10);
*/

/* ZADANIE 2
function czyPodzielneprzezC (a,b,c){
    
    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i); 
        }
    }
    console.log("Wypisano wszystkie liczby z przedziału "+a+ " - "+b+" podzielne przez "+c );
}

czyPodzielneprzezC(1,8,2);
czyPodzielneprzezC(1,90,22);

*/

/* ZADANIE 3

function tabliczka(n) {
    for (let i = 1; i <= n; i++) {
        let rzad = '';
        for (let j = 1; j <= n; j++) {
            rzad += (i * j) + ' ';
        }
        console.log(rzad.trim());
    }
}

    tabliczka(5);
    tabliczka(2);
*/

/* ZADANIE 4
function wypiszFibonacci(dlugosc) {

    if (dlugosc <= 0) {
        console.log("Proszę podać dodatnią długość.");
        return;
    }
    
    let pierwszy = 0;  
    let drugi = 1;     

    if (dlugosc === 1) {
        console.log(pierwszy);
        return;
    }

 
    console.log(pierwszy);
    console.log(drugi);
    

    for (let i = 3; i <= dlugosc; i++) {
        let nastepny = pierwszy + drugi;  
        console.log(nastepny);           
        
        pierwszy = drugi;
        drugi = nastepny;
    }
}

wypiszFibonacci(5);
*/

/* ZADANIE 5
function choinka(a) {
    for (let i = 1; i <= a; i++) {
        let gwiazdki = '';  
        for (let j = 1; j <= i; j++) {
            gwiazdki += '*'; 
        }
        console.log(gwiazdki);  
    }
}

choinka(3);
choinka(6);
*/

/* ZADANIE 6
function choinkaNoca(wysokosc) {

    for (let i = 0; i < wysokosc - 1; i++) {
        let gwiazdki = '*'.repeat(wysokosc * 2 - 1 - i * 2); 
        let spacje = ' '.repeat(i * 2);
        console.log(gwiazdki.slice(0, wysokosc - i) + spacje + gwiazdki.slice(0, wysokosc - i)); 
    }
     console.log('*'.repeat(wysokosc * 2 )); 
}

choinkaNoca(8);
*/

/* ZADANIE 7

function poleFigury(figura, ...args) {
    switch (figura) {
        case 'prostokat':
            return args[0] * args[1];
        case 'trapez':
            return ((args[0] + args[1]) * args[2]) / 2;
        case 'rownoleglobok':
            return args[0] * args[1];
        case 'trojkat':
            return (args[0] * args[1]) / 2;
        default:
            return 'Nieznana figura';
    }
}


console.log(poleFigury('prostokat', 4, 3));

*/

/* ZAdANIE 8
const poleFigury = {
    prostokat: (a, b) => a * b,
    trapez: (a, b, h) => ((a + b) * h) / 2,
    rownoleglobok: (a, h) => a * h,
    trojkat: (a, h) => (a * h) / 2
};

function obliczPole(figura, ...args) {
    return poleFigury[figura](...args);
}


console.log(obliczPole('trojkat', 4, 5)); 

*/ 

/* ZADANIE 9
function trojkatPascala(wysokosc) {
    let trojkat = [[1]];
    for (let i = 1; i < wysokosc; i++) {
        let poprzedni = trojkat[i - 1];
        let nowy = [1];
        for (let j = 1; j < poprzedni.length; j++) {
            nowy.push(poprzedni[j - 1] + poprzedni[j]);
        }
        nowy.push(1);
        trojkat.push(nowy);
    }
    trojkat.forEach(row => console.log(row.join(' ')));
}
trojkatPascala(6);

*/

/* ZADANIE 10
function cenzura(niedozwoloneSlowa, zdanie) {
    niedozwoloneSlowa.forEach(slowo => {
        const wzorzec = new RegExp(slowo, 'gi');
        zdanie = zdanie.replace(wzorzec, '*');
    });
    console.log(zdanie);
}


cenzura(['Ala', 'kot'], 'Ala ma kota i psa');

*/



