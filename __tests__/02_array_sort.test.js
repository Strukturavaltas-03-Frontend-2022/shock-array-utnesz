import { checkMember } from './utils';

const taskDir = '../tasks/02_array_sort';

const users = [
    { name: 'Ármin', age: 44, city: 'Bp' },
    { name: 'Katalin', age: 55, city: 'Kecskemét' },
    { name: 'Szófia', age: 22, city: 'Ágasegyháza' },
    { name: 'Örs', age: 9, city: 'Ózd' },
    { name: 'János', age: 67, city: 'Arad' },
];

describe('Function syntax', () => {
    test('1. feladat', async () => {
        const testFn = await checkMember(taskDir, 'sortFood');
        expect(testFn).not.toEqual(null);
        expect(testFn(['bread', 'apple', 'cinnamon'])).toEqual(
            ['apple', 'bread', 'cinnamon']
        );
    });

    test('2. feladat', async () => {
        const testFn = await checkMember(taskDir, 'sortNames');
        expect(testFn).not.toEqual(null);
        expect(testFn(['Imi', 'Géza', 'András'])).toEqual(
            ['András', 'Géza', 'Imi']
        );
    });

    test('3. feladat', async () => {
        const testFn = await checkMember(taskDir, 'sortVariousNumbers');
        expect(testFn).not.toEqual(null);
        expect(testFn([34, 125, 250, 11])).toEqual(
            [11, 34, 125, 250]
        );
    });

    test('4. feladat', async () => {
        const testFn = await checkMember(taskDir, 'sortVariousNumbersDesc');
        expect(testFn).not.toEqual(null);
        expect(testFn([34, 125, 250, 11])).toEqual(
            [250, 125, 34, 11]
        );
    });

    test('5. feladat', async () => {
        const testFn = await checkMember(taskDir, 'sortInternationalNames');
        expect(testFn).not.toEqual(null);
        expect(testFn(['Imre', 'Beáta', 'Ádám', 'Zoltán'])).toEqual(
            ['Ádám', 'Beáta', 'Imre', 'Zoltán']
        );
    });

    test('6. feladat', async () => {
        const testFn = await checkMember(taskDir, 'sortInternationalUsers');
        expect(testFn).not.toEqual(null);
        
        testFn(users);
        expect(users[0].name).toEqual('Ármin');
        expect(users[3].name).toEqual('Örs');
    });
    
    test('7. feladat', async () => {
        const testFn = await checkMember(taskDir, 'sortInternationalUsersByCity');
        expect(testFn).not.toEqual(null);

        testFn(users);
        expect(users[0].city).toEqual('Ágasegyháza');
        expect(users[4].city).toEqual('Ózd');
    });
    
    test('8. feladat', async () => {
        const testFn = await checkMember(taskDir, 'sortInternationalUsersByAgeDesc');
        expect(testFn).not.toEqual(null);

        testFn(users)
        expect(users[0].age).toEqual(67);
        expect(users[4].age).toEqual(9);
    });

});