/**
 * ÖSSZES TESZTELÉSE:
 * npm i
 * npm run test02
 */

/**
 * Array.prorotype.sort metódus.
 * Segítségével a tömb elemeit tetszés szerint rendezheted sorba.
 * A names.sort() meghívásánál a nevek tömbjét átrendezi a JS.
 * FONTOS: az eredeti tömb, tehát amit names néven átadsz  
 * rendeződni fog, nem új tömböt ad vissza a metódus! 
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
function getSortedNamesArray(names = ['Ali', 'Géza', 'Botond']) {
    return names.sort();
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
 * @summary ArrowFunctionExpression, visszaadja a string alapján rendezett tömböt.
 * @param {string[]} [food=['milk', 'bread', 'apple']] food - a rendezendő tömb.
 * @returns {string[]} - a string alapján rendezett tömb.
 * @desc Ha segítség kell, nézd meg a példafüggvényt feljebb.
 */
const sortFood = (food = ['milk', 'bread', 'apple']) => {
    return;
}

/**
 * 2. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja a string alapján rendezett tömböt.
 * @param {string[]} [names=['Bill', 'Anna']] names - a rendezendő tömb.
 * @returns {string[]} - a string alapján rendezett tömb.
 */
const sortNames = (names = ['Bill', 'Anna']) => {
    // 
}

/**
 * 3. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja a number alapján rendezett tömböt.
 * @param {number[]} [prices=[121, 41, 56, 1245]] prices - a rendezendő tömb.
 * @returns {number[]} - a number alapján rendezett tömb.
 * @desc A számokat a sima sort() nem jól rendezi, ezért a sort paramétereként  
 * egy callback függvényt használunk.  
 * Példa a callback függvényre: (a, b) => a - b
 */
const sortVariousNumbers = (prices=[121, 41, 56, 1245]) => {
    return prices.sort();
}

/**
 * 4. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja a number alapján  
 * CSÖKKENŐ sorrendbe rendezett tömböt.
 * A számokat a sima sort() nem jól rendezi, ezért callback függvényt használunk.
 * @param {number[]} [prices=[121, 41, 56, 1245]] prices - a rendezendő tömb.
 * @returns {number[]} - a number alapján rendezett tömb.
 * @desc most visszafelé kell rendezni, csökkenő sorrendbe.
 */
const sortVariousNumbersDesc = (prices = [121, 41, 56, 1245]) => {
    // 
}

/**
 * 5. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja a string alapján rendezett tömböt.
 * @param {string[]} [names=['Árpád', 'Beáta', 'Örs', 'Zoltán']] names  
 * a rendezendő tömb.
 * @returns {string[]} - a string alapján rendezett tömb.
 * @desc az magyar karaktereket nem jól rendezi a sima sort() metódus,  
 * ezért a localeCompare metódussal kell összehasonlítani a két string-et.
 * Példa callbackre: (string1, string2) => string1.localeCompare(string2)
 */
const sortInternationalNames = (names = ['Árpád', 'Beáta', 'Örs', 'Zoltán']) => {
    // 
}

/**
 * 6. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja a felhasználók neve alapján rendezett tömböt.
 * @param {[Object]} [users=[{name: 'Ákos', age: 44, city: 'Bp'}]] users  
 * a rendezendő tömb.
 * @returns {[Object]} - a nevek alapján rendezett users tömb.
 * @desc ez hasonló mint az előző, csak nem a string1.localeCompare(string2),  
 * hanem valami ilyesmi kell: user1.name.localeCompare(user2.name)
 */
const sortInternationalUsers = (users = [{name: 'Ákos', age: 44, city: 'Bp'}]) => {
    // 
}

/**
 * 7. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja a városok alapján rendezett tömböt.  
 * Függvény neve: sortInternationalUsersByCity
 * @param {[Object]} [users=[{name: 'Ákos', age: 44, city: 'Bp'}]] users  
 * a rendezendő tömb.
 * @returns {[Object]} - a városok alapján rendezett users tömb.
 * @desc EXPORTÁLD A FÜGGVÉNYT!
 */

/**
 * 8. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja az életkor alapján  
 * CSÖKKENŐ sorrendbe rendezett tömböt.  
 * Függvény neve: sortInternationalUsersByAgeDesc
 * @param {[Object]} [users=[{name: 'Ákos', age: 44, city: 'Bp'}]] users  
 * a rendezendő tömb.
 * @returns {[Object]} - az életkor alapján CSÖKKENŐ sorrendbe rendezett users tömb.
 * @desc EXPORTÁLD A FÜGGVÉNYT!
 */





export {
    sortFood,
    sortNames,
    sortVariousNumbers,
    sortVariousNumbersDesc,
    sortInternationalNames,
    sortInternationalUsers,


}
