/**
 * ÖSSZES TESZTELÉSE:
 * npm i
 * npm run test04
 */

/**
 * Array.prorotype.map metódus.
 * Segítségével a tömb elemeit meg tudod egyenként változtatni.
 * A names.map() egyenként átadja a tömb elemeit a callback függvénynek.
 * A callback függvény visszaadja az új tömbelemet.
 * 
 * A addNamePrefix függvényben a map metódus a tömb elemeit átadja  
 * a callback függvénynek,  
 * ami minden név elé odateszi hogy `Dear ` és a végére tesz egy `!` jelet.
 * Ezért a ['Dear Ali!', 'Dear Géza!', 'Dear Botond!'] tömbbel fog visszatérni.
 * 
 * FONTOS: az eredeti tömb, tehát a names az nem fog megváltozni!
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
 function addNamePrefix(names = ['Ali', 'Géza', 'Botond']) {
    return names.map( name => `Dear ${name}!` );
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
 * @summary ArrowFunctionExpression, a kapott ételnevek titlecase  
 * (nagy betűvel kezdődő) verzióját tartalmazó tömböt ad vissza.
 * @param {string[]} [foods=['milk', 'bread', 'apple']] food - ételnevek.
 * @returns {string[]} - titlecase ételnevek.
 * @desc Ha segítség kell, nézd meg a példafüggvényt feljebb.
 * A function shock gyakorlatban úgy csináltuk, hogy kivettük az első  
 * karaktert amit nagybetűssé alakítottunk, majd a maradékot összefűztük vele.
 */
const transformTitleCase = (foods = ['milk', 'bread', 'apple']) => {
    // 
}

/**
 * 2. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, kiegészíti a vezetékneveket a nemnek  
 * megfelelő prefixummal! male = `Mr. `, female = `Ms. `
 * @param {[Object]} [students=[{lastName: 'Doe', gender: 'male'}]] students.
 * @returns {Object} - tanulók tömbje a prefixummal kiegészített lastName-el.
 * @desc nagyon hasonló az addNamePrefix-hez, csak a név az objektumban van.
 * Vigyázz, ez nem egysoros callback lesz. Először módosítanod kell a kapott  
 * adatot és csak utána tudod visszaadni.
 * A módosításnál először ellenőrzöd a nemet, és utána beállítod a neki  
 * megfelelő prefixumot.
 */
const addNamePrefixToStudents = (students = [{lastName: 'Doe', gender: 'male'}]) => {
    // 
}

/**
 * 3. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja egy új tömbben a termékek  
 * eladási árát ami 30%-al magasabb mint a kapott összeg. 
 * Függvény neve: getSellPrices
 * @param {number[]} [prices=[75, 80, 56, 1245]] prices - árak tömbje.
 * @returns {number[]} - az árak 1.3-szorosa.
 * @desc EXPORTÁLD A FÜGGVÉNYT!
 */



/**
 * 4. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaad egy tömböt, amiben a tanulók  
 * teljes neve és viszgaeredménye található. 
 * Függvény neve: getStudentReports
 * @param {[Object]} [students=[{firstName: 'John', lastName: 'Doe', points: 20}]] students.
 * @returns {string[]} - eredmény `<firstName> <lastName>, points: <points>.`  
 * formátumban.
 * @desc vigyázz, objektumokat kapsz, de string-eket kell visszaadnod.
 * Template-literallal dolgozz.
 * EXPORTÁLD A FÜGGVÉNYT!
 */



/**
 * 5. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaad egy új tömböt, amiben az egyes  
 * objektumok ki vannak egészítve azzal, hogy sikeres volt-e a vizsga?  
 * Az új tulajdonság neve: result, 
 * értéke: ha több mint 50 pontja van `passing`, különben `not passing`.
 * Függvény neve: addStudentReports
 * @param {[Object]} [students=[{firstName: 'John', points: 20}]] students.
 * @returns {Object[]} - student objektumok kiegészítve a result tulajdonsággal.
 * @desc két lépés, először hozzáadod a result tulajdonságot, utána visszaadod.
 * Ha bátor vagy és egy sorban akarod megoldani (nem muszály): 
 * ({...student, result: student.points > 50 ? 'passing' : 'not passing'})
 * EXPORTÁLD A FÜGGVÉNYT!
 */



/**
 * 6. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, employee objektumok új tömbjét adja vissza,  
 * kiegészítve a teljes bevételükkel.  
 * A tulajdonság neve: income
 * Értéke: (fizetés plusz prémium) növelve a korrekcióval.  
 * Ha a korrekció 0.3, az azt jelenti, hogy az összeg az 1.3-szorosára módosul.
 * A függvény neve: addCorrectedIncome
 * @param {[Object]} [employees=[{name: 'Bob', salary: 200000, premium: 1000, corr: 0.2}]]  
 * employees
 * @returns {[Object]} - az income-al kiegészített employee objektumok tömbje.
 * @desc EXPORTÁLD A FÜGGVÉNYT!
 */



/**
 * 7. feladat
 * @todo Pótold a hiányzó részeket!
 * @summary ArrowFunctionExpression, visszaadja a fogásokat az árukkal kiegészítve.  
 * Csak a számot kalkuláljuk ki, a pénznemet elhanyagoljuk.   
 * Tulajdonság neve: price
 * Értéke attól függ, hogy milyen típusú ételről van szó?
 * Desszertek esetén: minden desszert 200, de kalóriánként 1.5-el olcsóbb.  
 * Azaz, egy 50 kalóriás desszert 125-be kerül, mert 50 * 1.5-öt levonunk a 200-ból.
 * Egyéb ételek esetén: alapból 25 az értéke, és minden kalóriával 1-el drágul.
 * FONTOS: kerekítsd matematikai függvénnyel az price-ot.
 * A függvény neve: addDishPrices
 * @param {[Object]} [dishes=[{id: 1, kcal: 101, type: 'dessert'}]]  dishes
 * @returns {[Object]} - a fogások tömbje az árukkal kiegészítve.
 * @desc neked a `kcal` és `type` kulcsokat kell vizsgálnod.
 * EXPORTÁLD A FÜGGVÉNYT!
 */



export {
    transformTitleCase,
    addNamePrefixToStudents,
}
