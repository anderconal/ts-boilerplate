import rulesInterface from '../Interfaces/Rules';

class FizzBuzzRule implements rulesInterface {
 	meetsRule(number: number): boolean {
 		return (number % 3 == 0 && number % 5 == 0);
 	}

	getReplacement(): string {
		return 'FizzBuzz';
	}
}

export default FizzBuzzRule;