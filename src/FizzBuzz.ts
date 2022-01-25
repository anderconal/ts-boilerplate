import BuzzRule from './Rules/BuzzRule';
import FizzRule from './Rules/FizzRule';
import FazzRule from './Rules/FazzRule';
import FizzBuzzRule from './Rules/FizzBuzzRule';

export class FizzBuzz {
	static replace(limit: number): (string | number)[] {
		const replacedFizzArray: (string | number)[] = [];
		for (let number = 1; number <= limit; number++) {
			replacedFizzArray.push(this.replaceValues(number));
		}

		return replacedFizzArray;
	}

	private static replaceValues(number: number): string | number {

		const ruleFizzBuzz = new FizzBuzzRule();
		if(ruleFizzBuzz.meetsRule(number)){
			return ruleFizzBuzz.getReplacement();
		}

		const ruleFazz = new FazzRule();
		 if(ruleFazz.meetsRule(number)){
		 	return ruleFazz.getReplacement();
		 }

		const ruleBuzz = new BuzzRule();
		if(ruleBuzz.meetsRule(number)){
			return ruleBuzz.getReplacement();
		}

		const ruleFizz = new FizzRule();
		if(ruleFizz.meetsRule(number)){
			return ruleFizz.getReplacement();
		}

		return number;
	}
}
