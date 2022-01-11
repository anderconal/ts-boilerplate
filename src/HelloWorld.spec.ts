import { FizzBuzz } from './FizzBuzz';

describe('Fizz', () => {
	it('There is FizzBuzz module', () => {
		expect(FizzBuzz).toBeDefined();
	});

	it('There is a static method called replace', () => {
		expect(FizzBuzz.replace).toBeDefined();
	});

	it('The method has been called with the correct arguments', () => {
		FizzBuzz.replace(2);
		expect(true);
	});

	it('The method should return a list', () => {
		expect(FizzBuzz.replace(2)).toBeInstanceOf(Array);
	});

	it('The method should return a list that is not empty', () => {
		expect(FizzBuzz.replace(2)).toHaveLength(2);
	});

	it('The method should replace numbers divisible by three to Fizz', () => {
		const expectedResult = [1, 2, 'Fizz'];
		expect(FizzBuzz.replace(3)).toEqual(expectedResult);
	});
	it('If a number is divisible by 5 should be replaced with Buzz', () => {
		const expectedResult = [1, 2, 'Fizz', 4, 'Buzz'];
		expect(FizzBuzz.replace(5)).toEqual(expectedResult);
	});
	it('If a number is divisible by 3 and by 5 should be replaced with FizzBuzz', () => {
		const expectedResult =
		[1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 'Fazz', 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 'Fazz', 'FizzBuzz'];
		expect(FizzBuzz.replace(15)).toEqual(expectedResult);
	});
	it('If a number is divisible by 3 and by 5 should be replaced with FizzBuzz up to 30', () => {
		const expectedResult = 'FizzBuzz';
		expect(FizzBuzz.replace(30)[29]).toEqual(expectedResult);
	});
	it('If a number is divisible by 7 should be replaced with Fazz up to 7', () => {
		const expectedResult = 'Fazz';
		expect(FizzBuzz.replace(7)[6]).toEqual(expectedResult);
	});
	it('If a number is divisible by 7 should be replaced with Fazz up to 14', () => {
		const expectedResult = 'Fazz';
		expect(FizzBuzz.replace(14)[13]).toEqual(expectedResult);
	});
});
