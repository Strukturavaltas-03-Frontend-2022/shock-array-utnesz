import { checkMember } from './utils';

const taskDir = '../tasks/01_array_foreach';

const employees = [
    {name: 'Bob', salary: 200000, dep: 'marketing'},
    {name: 'Windy', salary: 350000, dep: 'marketing'},
    {name: 'Jamie', salary: 525000, dep: 'production'},
    {name: 'Poory', salary: 150000, dep: 'development'},
    {name: 'CleanerGuy', salary: 250000, dep: 'finance'},
];

const citizens = [
    {nation: 'German', email: 'franz@yahoo.com', city: 'Budapest'},
    {nation: 'French', email: 'franz@gmail.com', city: 'Budapest'},
    {nation: 'German', email: 'willy@gmail.com', city: 'Budapest'},
];

describe('Function syntax', () => {
    test('1. feladat', async () => {
        const testFn = await checkMember(taskDir, 'copyFoodArray');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn([''])) ).toBeTruthy();
        expect(testFn(['bread', 'apple', 'cinnamon'])).toEqual(
            ['bread', 'apple', 'cinnamon']
        );
    });

    test('2. feladat', async () => {
        const testFn = await checkMember(taskDir, 'findNamesWithA');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn([''])) ).toBeTruthy();
        expect(testFn(['Andy', 'Rosemary', 'Bill', 'Augaro'])).toEqual(
            ['Rosemary', 'Augaro']
        );
    });

    test('3. feladat', async () => {
        const testFn = await checkMember(taskDir, 'findBigPrices');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn([1])) ).toBeTruthy();
        expect(testFn([34, 222, 101, 55])).toEqual(
            [222, 101]
        );
    });

    test('4. feladat', async () => {
        const testFn = await checkMember(taskDir, 'findEvens');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn([1])) ).toBeTruthy();        
        expect(testFn()).toEqual([56]);
        expect(testFn([34, 125, 250, 11])).toEqual(
            [34, 250]
        );
    });

    test('5. feladat', async () => {
        const testFn = await checkMember(taskDir, 'findHigherSalariedEmployees');
        expect(testFn).not.toEqual(null);

        expect(testFn()).toEqual([]);

        expect( Array.isArray(testFn(employees)) ).toBeTruthy();
        expect(testFn(employees).length).toEqual(2);
        expect(testFn(employees)[0].name).toEqual('Windy');
        expect(testFn(employees)[1].name).toEqual('Jamie');
    });

    test('6. feladat', async () => {
        const testFn = await checkMember(taskDir, 'findEmployeesFromMarketing');
        expect(testFn).not.toEqual(null);
        
        expect(testFn()).toEqual([]);

        expect( Array.isArray(testFn(employees)) ).toBeTruthy();
        expect(testFn(employees).length).toEqual(1);
        expect(testFn(employees)[0].name).toEqual('Windy');
    });
    
    test('7. feladat', async () => {
        const testFn = await checkMember(taskDir, 'findGermanMigrants');
        expect(testFn).not.toEqual(null);

        expect(testFn()[0].email).toEqual('franz@gmail.com');

        expect( Array.isArray(testFn(citizens)) ).toBeTruthy();
        expect(testFn(citizens).length).toEqual(1);
        expect(testFn(citizens)[0].email).toEqual('willy@gmail.com');
    });

});