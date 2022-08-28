import { checkMember } from './utils';

const taskDir = '../tasks/03_array_filter';

const employees = [
    {name: 'Bob', salary: 200000, dep: 'marketing'},
    {name: 'Windy', salary: 350000, dep: 'marketing'},
    {name: 'Jamie', salary: 525000, dep: 'production'},
    {name: 'Poory', salary: 150000, dep: 'development'},
    {name: 'CleanerGuy', salary: 250000, dep: 'finance'},
];

const citizens = [
    {nation: 'Hungarian', id: 'id-1', bd: 2008},
    {nation: 'French', id: 'id-2', bd: 2010},
    {nation: 'Hungarian', id: 'id-3', bd: 2000},
    {nation: 'German', id: 'id-4', bd: 1995},
    {nation: 'Hungarian', id: 'id-5', bd: 1973},
];

const cars = [
    {man: 'Ford', year: 2000, type: 'fiesta'},
    {man: 'Mazda', year: 2013, type: '6'},
    {man: 'Nissan', year: 2015, type: 'leaf'},
    {man: 'VW', year: 2009, type: 'passat'},
    {man: 'Renault', year: 2020, type: 'zoe'},
];

const dishes = [
    {id: 1, kcal: 101, type: 'dessert'},
    {id: 2, kcal: 76, type: 'soup'},
    {id: 3, kcal: 99, type: 'dessert'},
    {id: 4, kcal: 44, type: 'drink'},
    {id: 5, kcal: 85, type: 'dessert'},
];

describe('Function syntax', () => {
    test('1. feladat', async () => {
        const testFn = await checkMember(taskDir, 'fourCharFoods');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn([''])) ).toBeTruthy();
        expect(testFn(['bread', 'milk', 'cinnamon'])).toEqual(
            ['milk']
        );
    });

    test('2. feladat', async () => {
        const testFn = await checkMember(taskDir, 'findNamesWithA');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn([''])) ).toBeTruthy();
        expect(testFn(['Andy', 'Rosemary', 'Bill', 'Augaro'])).toEqual(
            ['Andy', 'Rosemary', 'Augaro']
        );
    });

    test('3. feladat', async () => {
        const testFn = await checkMember(taskDir, 'findBigPrices');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn([1])) ).toBeTruthy();
        expect(testFn([77, 78, 80, 90])).toEqual(
            [80, 90]
        );
    });

    test('4. feladat', async () => {
        const testFn = await checkMember(taskDir, 'filterOdds');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn([])) ).toBeTruthy(); 
        expect(testFn().length).toEqual(3);
        expect(testFn([34, 125, 250, 11])).toEqual(
            [125, 11]
        );
    });

    test('5. feladat', async () => {
        const testFn = await checkMember(taskDir, 'filterOldCars');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn(cars)) ).toBeTruthy();
        expect(testFn().length).toEqual(1);
        expect(testFn(cars)[0].man).toEqual('Ford');
        expect(testFn(cars)[1].man).toEqual('VW');
    });

    test('6. feladat', async () => {
        const testFn = await checkMember(taskDir, 'findAdultCitizens');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn()) ).toBeTruthy();
        expect(testFn().length).toEqual(1);
        expect(testFn(citizens)[0].id).toEqual('id-3');
        expect(testFn(citizens)[1].id).toEqual('id-5');
    });
    
    test('7. feladat', async () => {
        const testFn = await checkMember(taskDir, 'filterDietFoods');
        expect(testFn).not.toEqual(null);
        
        expect( Array.isArray(testFn()) ).toBeTruthy();
        expect(testFn().length).toEqual(0);
        expect(testFn(dishes).length).toEqual(2);
        expect(testFn(dishes)[0].id).toEqual(3);
        expect(testFn(dishes)[1].id).toEqual(5);
    });

});