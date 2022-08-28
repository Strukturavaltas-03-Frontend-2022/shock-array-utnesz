/**
 * ÖSSZES TESZTELÉSE:
 * npm i
 * npm run test03
 */

/**
 * Array.prorotype.filter metódus.
 * Segítségével a tömb elemeit tudod szűrni és egy új tömbbe menteni.
 * A names.filter() egyenként átadja a tömb elemeit a callback függvénynek.
 * A callback függvénynek true vagy false (truthy, falsy) értéket kell visszaadnia.
 * Ha true-t ad vissza, akkor a visszaadott tömbben szerepelni fog az érték.
 * 
 * A filterArrayElements függvény a tömb elemeit átadja a callback függvénynek,  
 * ami akkor ad vissza true értéket, ha a string hossza nagyobb mint 3.
 * Ezért a ['Géza', 'Botond'] tömbbel fog visszatérni.
 * 
 * FONTOS: az eredeti tömb, tehát a names az nem fog megváltozni!
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
 function filterArrayElements(names = ['Ali', 'Géza', 'Botond']) {
    return names.filter( name => name.length > 3 );
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
 * @summary ArrowFunctionExpression, a kapott ételnevek közül a pontosan négy  
 * karakter hosszúakkal tér vissza.
 * @param {string[]} [foods=['milk', 'bread', 'apple']] food - az eredeti tömb.
 * @returns {string[]} - a négy karakter hosszú ételek.
 * @desc Ha segítség kell, nézd meg a példafüggvényt feljebb.
 */
const fourCharFoods = (foods = ['milk', 'bread', 'apple']) => {
    // 
}

/**
 * 2. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja azokat a neveket amelyek `a`  
 * betűt tartalmaznak, egy új tömbben. Kis és nagybetűkre is keres!
 * @param {string[]} [names=['Bill', 'Anna', 'Andy']] names - a nevek tömbje.
 * @returns {string[]} - az `a` vagy `A` betűt tartalmazó nevek tömbje.
 * @desc használhatod az include-ot mint a forEach példánál.
 * Trükk: alakítsd kisbetűsre a string-et az includes előtt.
 * Példa: food.toLowerCase().includes(...)
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 */
const findNamesWithA = (names = ['Bill', 'Anna', 'Andy']) => {
    // 
}

/**
 * 3. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja egy új tömbben azokat a  
 * számokat, amelyek bruttó értéke nagyobb mint 100.  
 * @param {number[]} [prices=[75, 80, 56, 1245]] prices - árak tömbje.
 * @returns {number[]} - azok az elemek amelyek 1.27-szerese nagyobb mint 100.
 */
const findBigPrices = (prices=[75, 80, 56, 1245]) => {
    // 
}

/**
 * 4. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaad egy új tömböt a páratlan számokkal.
 * A függvény neve: filterOdds
 * @param {number[]} [prices=[121, 41, 56, 1245]] prices - árak tömbje.
 * @returns {number[]} - a páratlan számok.
 * @desc a modal segít neked, a `4 % 2` kifejezés értéke 0,  
 * mert ha négyet osztom kettővel nincs maradék.  
 * Tehát ha a páratlan számokat keresed akkor a number % 2 nem lesz 0.
 * EXPORTÁLD A FÜGGVÉNYT!
 */



/**
 * 5. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaad egy új tömböt a 10 évnél  
 * idősebb autókkal. A hónap / napot elhanyagoljuk.
 * A függvény neve: filterOldCars
 * @param {[Object]} [cars=[{man: 'Ford', year: 2000, type: 'fiesta'}]] cars.
 * @returns {[Object]} - a 10 évnél idősebb autók.
 * @desc az összehasonlításra a Date objektumot használd.
 * Étrelemszerűen azok kellenek, ahol nagyobb a mostani év és az autó  
 * évszámának a különbsége több mint 10.
 * EXPORTÁLD A FÜGGVÉNYT!
 */



/**
 * 6. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja a szavazókat, azaz a 18. évüket  
 * betöltött és magyar állampolgárokat. A hónapot / napot elhanyagoljuk.
 * A függvény neve: findAdultCitizens
 * @param {[Object]} [citizens=[{id: '33DDffgz', bd: 1987, nation: 'Hungarian'}]]  
 * citizens - polgárok.
 * @returns {[Object]} - a 18 évet betöltött magyar állampolgárok.
 * @desc a `bd` és `nation` kulcsokat kell vizsgálnod.
 * EXPORTÁLD A FÜGGVÉNYT!
 */



/**
 * 7. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja azokat a desszerteket, amelyek  
 * kevesebb mint 100 kalóriát tartalmaznak.
 * A függvény neve: filterDietFoods
 * @param {[Object]} [dishes=[{id: 1, kcal: 101, type: 'dessert'}]]  dishes
 * @returns {[Object]} - a 100 kalóriánál kevesebbet tartalmazó desszertek.
 * @desc a `kcal` és `type` kulcsokkal dolgozz, a `dessert` a jó típus.
 * EXPORTÁLD A FÜGGVÉNYT!
 */



export {
    fourCharFoods,
    findNamesWithA,
    findBigPrices,
}
