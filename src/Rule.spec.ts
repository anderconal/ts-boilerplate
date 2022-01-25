import { FizzRule } from './FizzBuzz';

describe('Rules Testing', () => {
	it('Get Fizz ', () => {
		const fizzRule = new FizzRule();
		expect(fizzRule.getMessage()).toBe('Fizz');
	});
});