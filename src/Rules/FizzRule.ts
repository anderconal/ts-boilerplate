import rulesInterface from '../Interfaces/Rules';


class FizzRule implements rulesInterface {
	meetsRule(number: number): boolean {
		return number % 3 == 0;
	}

	getReplacement(): string {
		return 'Fizz';
	}
}

export default FizzRule;