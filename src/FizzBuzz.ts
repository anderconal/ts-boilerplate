import rulesInterface from './Interfaces/Rules';

// interface rulesInterface {
// 	meetsRule(number:number): boolean;
// 	getReplacement(): string;
// }

// class FizzRule implements rulesInterface {
// 	meetsRule(number: number): boolean {
// 		return number % 3 == 0;
// 	}

// 	getReplacement(): string {
// 		return 'Fizz';
// 	}
// }

//  class FazzRule implements rulesInterface {
//  	meetsRule(number: number): boolean {
//  		return number % 7 == 0;
//  	}

// 	getReplacement(): string {
// 		return 'Fazz';
// 	}
// }
//  class FizzBuzzRule implements rulesInterface {
//  	meetsRule(number: number): boolean {
//  		return (number % 3 == 0 && number % 5 == 0);
//  	}

// 	getReplacement(): string {
// 		return 'FizzBuzz';
// 	}
// }
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
