import rulesInterface from '../Interfaces/Rules';

 class FazzRule implements rulesInterface {
 	meetsRule(number: number): boolean {
 		return number % 7 == 0;
 	}

	getReplacement(): string {
		return 'Fazz';
	}
}

export default FazzRule;