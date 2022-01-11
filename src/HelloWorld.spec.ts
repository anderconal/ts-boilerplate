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
});
