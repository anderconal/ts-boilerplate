import { ReplaceArrayByRules,FizzBuzzRule,FazzRule,BuzzRule,FizzRule } from './ReplaceArrayByRules';

describe('Replace array by rules', () => {
	ReplaceArrayByRules.addRuleToArray(new FizzBuzzRule());
	ReplaceArrayByRules.addRuleToArray(new FazzRule());
	ReplaceArrayByRules.addRuleToArray(new BuzzRule());
	ReplaceArrayByRules.addRuleToArray(new FizzRule());

	it('There is ReplaceArrayByRules module', () => {
		expect(ReplaceArrayByRules).toBeDefined();
	});

	it('There is a static method called replace', () => {
		expect(ReplaceArrayByRules.replace).toBeDefined();
	});

	it('The method has been called with the correct arguments', () => {
		ReplaceArrayByRules.replace(2);
		expect(true);
	});

	it('The method should return a list', () => {
		expect(ReplaceArrayByRules.replace(2)).toBeInstanceOf(Array);
	});

	it('The method should return a list that is not empty', () => {
		expect(ReplaceArrayByRules.replace(2)).toHaveLength(2);
	});

	it('The method should replace numbers divisible by three to Fizz', () => {
		const expectedResult = [1, 2, 'Fizz'];
		expect(ReplaceArrayByRules.replace(3)).toEqual(expectedResult);
	});

	it('If a number is divisible by 5 should be replaced with Buzz', () => {
		const expectedResult = [1, 2, 'Fizz', 4, 'Buzz'];
		expect(ReplaceArrayByRules.replace(5)).toEqual(expectedResult);
	});

	it('If a number is divisible by 3 and by 5 should be replaced with FizzBuzz', () => {
		const expectedResult =
		[1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 'Fazz', 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 'Fazz', 'FizzBuzz'];
		expect(ReplaceArrayByRules.replace(15)).toEqual(expectedResult);
	});

	it('If a number is divisible by 3 and by 5 should be replaced with FizzBuzz up to 30', () => {
		const expectedResult = 'FizzBuzz';
		expect(ReplaceArrayByRules.replace(30)[29]).toEqual(expectedResult);
	});

	it('If a number is divisible by 7 should be replaced with Fazz up to 7', () => {
		const expectedResult = 'Fazz';
		expect(ReplaceArrayByRules.replace(7)[6]).toEqual(expectedResult);
	});

	it('If a number is divisible by 7 should be replaced with Fazz up to 14', () => {
		const expectedResult = 'Fazz';
		expect(ReplaceArrayByRules.replace(14)[13]).toEqual(expectedResult);
	});

	it('If a number is divisible by 7 and 3 we decided to be replace with Fazz up to 21', () => {
		const expectedResult = 'Fazz';
		expect(ReplaceArrayByRules.replace(21)[20]).toEqual(expectedResult);
	});
});
