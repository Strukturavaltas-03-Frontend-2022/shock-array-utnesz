import { checkMember } from './utils';

const taskDir = '../tasks/04_array_map';

const employees = () => [
    {name: 'Bob', salary: 200000, dep: 'marketing', premium: 1000, corr: 0.2},
    {name: 'Windy', salary: 350000, dep: 'marketing', premium: 0, corr: 0.3},
    {name: 'Jamie', salary: 525000, dep: 'production', premium: 2000, corr: 0.0},
    {name: 'Poory', salary: 150000, dep: 'development', premium: 5000, corr: 0.5},
    {name: 'CleanerGuy', salary: 250000, dep: 'finance', premium: 0, corr: 0.1},
];

const students = () => [
    {firstName: 'John', lastName: 'Doe', points: 20, gender: 'male'},
    {firstName: 'Jason', lastName: 'Smith', points: 49, gender: 'male'},
    {firstName: 'Mary', lastName: 'Poppins', points: 85, gender: 'female'},
    {firstName: 'Agatha', lastName: 'Christie', points: 75, gender: 'female'},
    {firstName: 'Carlo', lastName: 'Pedersoli', points: 99, gender: 'male'},
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

const dishes = () => [
    {id: 1, kcal: 101, type: 'dessert'},
    {id: 2, kcal: 76, type: 'soup'},
    {id: 3, kcal: 99, type: 'dessert'},
    {id: 4, kcal: 44, type: 'drink'},
    {id: 5, kcal: 85, type: 'dessert'},
];

describe('Function syntax', () => {
    test('1. feladat', async () => {
        const testFn = await checkMember(taskDir, 'transformTitleCase');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn([])) ).toBeTruthy();
        expect(testFn(['ali', 'botond', 'mary'])).toEqual(
            ['Ali', 'Botond', 'Mary']
        );
    });

    test('2. feladat', async () => {
        const testFn = await checkMember(taskDir, 'addNamePrefixToStudents');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn([])) ).toBeTruthy();
        expect(testFn(students()).length).toEqual(5);
        expect(testFn(students())[0].lastName).toEqual('Mr. Doe');
        expect(testFn(students())[3].lastName).toEqual('Ms. Christie');
    });

    test('3. feladat', async () => {
        const testFn = await checkMember(taskDir, 'getSellPrices');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn([1])) ).toBeTruthy();
        expect( testFn()[1] ).toEqual(104);
        expect(testFn([100, 200, 300])).toEqual(
            [130, 260, 390]
        );
    });

    test('4. feladat', async () => {
        const testFn = await checkMember(taskDir, 'getStudentReports');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn([])) ).toBeTruthy(); 
        expect(testFn().length).toEqual(1);
        expect(testFn()[0]).toEqual('John Doe, points: 20.');
        expect(testFn(students())[4]).toEqual('Carlo Pedersoli, points: 99.');
    });

    test('5. feladat', async () => {
        const testFn = await checkMember(taskDir, 'addStudentReports');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn()) ).toBeTruthy();
        expect(testFn().length).toEqual(1);
        expect(testFn()[0].result).toEqual('not passing');

        const withResults = testFn(students());
        expect(withResults[0].result).toEqual('not passing');
        expect(withResults[1].result).toEqual('not passing');
        expect(withResults[2].result).toEqual('passing');
        expect(withResults[3].result).toEqual('passing');
        expect(withResults[4].result).toEqual('passing');
    });

    test('6. feladat', async () => {
        const testFn = await checkMember(taskDir, 'addCorrectedIncome');
        expect(testFn).not.toEqual(null);

        expect( Array.isArray(testFn()) ).toBeTruthy();
        expect(testFn().length).toEqual(1);
        expect(testFn()[0].income).toEqual(241200);

        const withIncomes = testFn(employees());
        expect(withIncomes[0].income).toEqual(241200);
        expect(withIncomes[1].income).toEqual(455000);
        expect(withIncomes[2].income).toEqual(527000);
        expect(withIncomes[3].income).toEqual(232500);
        expect(withIncomes[4].income).toEqual(275000);
    });
    
    test('7. feladat', async () => {
        const testFn = await checkMember(taskDir, 'addDishPrices');
        expect(testFn).not.toEqual(null);
        
        expect( Array.isArray(testFn()) ).toBeTruthy();
        expect(testFn().length).toEqual(1);
        expect(testFn()[0].price).toEqual(49);

        const withPrices = testFn(dishes());
        expect(withPrices[0].price).toEqual(49);
        expect(withPrices[1].price).toEqual(101);
        expect(withPrices[2].price).toEqual(52);
        expect(withPrices[3].price).toEqual(69);
        expect(withPrices[4].price).toEqual(73);
    });

});