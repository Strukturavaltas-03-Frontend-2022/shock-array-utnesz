/**
 * ÖSSZES TESZTELÉSE:
 * npm i
 * npm run test01
 */

/**
 * Array.prorotype.forEach metódus.
 * Segítségével a tömb elemeit tudod bejárni.
 * A names.forEach() egyenként átadja a tömb elemeit a callback függvénynek.
 * A copyArrayElements függvény a tömb elemeit átadja a callback függvénynek,  
 * majd az push-olja őket egy ú tömbbe. A push metódus mindig hozzáad egy  
 * új elemet a tömb végéhez.
 * FONTOS: az eredeti tömb, tehát amit names néven átadsz  
 * nem fog megváltozni a forEach futtatása során, csak ha ezt kifejezetten akarod! 
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
function copyArrayElements(names = ['Ali', 'Géza', 'Botond']) {
    const namesCopy = [];
    names.forEach( name => namesCopy.push(name) );
    return namesCopy;
}

/**
 * Feladatok: minden függvény előtt le lesz írva, mi a pontos feladat.
 * Először csak egy-egy sort kell pótolnod, majd egyre többet kell önállóan 
 * megírnod a függvényekből.
 * Figyelj a dokumantációs kommentekre, amelyek /** jellel kezdődnek.
 * FONTOS: ha van default paraméter, mindig add hozzá a függvényfejhez!
 */

/**
 * 1. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, átmásolja a tömb elemeit egy új tömbbe és  
 * visszatér ezzel az új tömbbel.
 * @param {string[]} [food=['milk', 'bread', 'apple']] food - az eredeti tömb.
 * @returns {string[]} - a tömb másolata.
 * @desc Ha segítség kell, nézd meg a példafüggvényt feljebb.
 */
const copyFoodArray = (food = ['milk', 'bread', 'apple']) => {
    // return;
}

/**
 * 2. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja azokat a neveket amelyek `a`  
 * betűt tartalmaznak, egy új tömbben.
 * @param {string[]} [names=['Bill', 'Anna']] names - a nevek tömbje.
 * @returns {string[]} - az `a` betűt tartalmazó nevek tömbje.
 * @desc a string típus includes metódusa megmonja, hogy egy adott string  
 * benne van-e a másikban? Ez nem csak egy karakter lehet, hanem akár egy  
 * hosszabb text is, ha benne van true, ha nincs false a visszatérési értéke.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 */
const findNamesWithA = (names = ['Bill', 'Anna']) => {
    // 
    names.forEach( name => {
        if (name.includes('a')) {
            namesWithA.push(name);
        }
    });
    // 
}

/**
 * 3. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja egy új tömböt a 100-nál nagyobb  
 * értékekkel.
 * @param {number[]} [prices=[121, 41, 56, 1245]] prices - árak tömbje.
 * @returns {number[]} - a prices tömbből a 100-nál nagyobb értékek tömbje.
 * @desc a lényeges változás az if feltételben lesz.
 */
const findBigPrices = (prices=[121, 41, 56, 1245]) => {
    // 
}

/**
 * 4. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaad egy új tömböt a páros számokkal.
 * A függvény neve: findEvens
 * @param {number[]} [prices=[121, 41, 56, 1245]] prices - árak tömbje.
 * @returns {number[]} - a páros számok.
 * @desc a modal segít neked, a `4 % 2` kifejezés értéke 0,  
 * mert ha négyet osztom kettővel nincs maradék.  
 * Ugyanezt tudod alkalmazni az árakra is.
 * EXPORTÁLD A FÜGGVÉNYT!
 */



/**
 * 5. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaad egy új tömböt a 300 000-nél  
 * többet kereső dolgozók objektumaival.
 * A függvény neve: findHigherSalariedEmployees
 * @param {[Object]} [employees=[{name: '', salary: 200000}]] employees - dolgozók.
 * @returns {[Object]} - a 300 000-nél többet kereső dolgozók tömbje.
 * @desc a forEach callback-ben csak azokat kell kiválogatni, ahol a  
 * salary nagyobb mint 300 000. 
 * Vigyázz, ez most egy objektumban lesz: e.salary > 100000
 * EXPORTÁLD A FÜGGVÉNYT!
 */



/**
 * 6. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaad egy új tömböt a 300 000-nél  
 * többet kereső dolgozókkal, akik a marketing részlegen dolgoznak.
 * A függvény neve: findEmployeesFromMarketing
 * @param {[Object]} [employees=[{name: '', salary: 200000, dep: 'marketing'}]]  
 * employees - dolgozók.
 * @returns {[Object]} - a 300 000-nél többet kereső dolgozók tömbje,  
 * akik a marketing részlegen dolgoznak.
 * @desc annyiban nehezebb az előzőnél, hogy két feltételt kell vizsgálnod.
 * EXPORTÁLD A FÜGGVÉNYT!
 */



/**
 * 7. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaad egy új tömböt a Budapesten élő  
 * német állampolgárokkal, akiknek gmail-es email címe van.
 * A függvény neve: findGermanMigrants
 * @param {[Object]} [citizens=[{nation: 'German', email: 'franz@gmail.com', city: 'Budapest'}]]  citizens
 * @returns {[Object]} - a Budapesten élő német állampolgárok gmail-es címmel.
 * @desc az email-t az include-al tudod könnyen vizsgálni (lásd fentebb).  
 * Ha szerepel benne a `gmail` részlet akkor gmail-esnek lehet venni.
 * EXPORTÁLD A FÜGGVÉNYT!
 */



export {
    copyFoodArray,
    findNamesWithA,
    findBigPrices,




}
