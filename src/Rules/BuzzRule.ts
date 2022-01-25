import rulesInterface from 'src/Interfaces/Rules';

class BuzzRule implements rulesInterface {
	meetsRule(number: number): boolean {
		return number % 5 == 0;
	}

	getReplacement(): string {
		return 'Buzz';
	}
}

export default BuzzRule;