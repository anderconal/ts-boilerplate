import { FizzRule, BuzzRule, FazzRule, FizzBuzzRule } from './FizzBuzz';

describe('Rules Testing', () => {
	it('Get Fizz ', () => {
		const fizzRule = new FizzRule();
		expect(fizzRule.getMessage()).toBe('Fizz');
	});

	it('Get Buzz ', () => {
		const buzzRule = new BuzzRule();
		expect(buzzRule.getMessage()).toBe('Buzz');
	});

	it('Get Fazz ', () => {
		const fazzRule = new FazzRule();
		expect(fazzRule.getMessage()).toBe('Fazz');
	});

	it('Get FizzBuzz ', () => {
		const fizzBuzzRule = new FizzBuzzRule();
		expect(fizzBuzzRule.getMessage()).toBe('FizzBuzz');
	});
});