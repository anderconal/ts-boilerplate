export class FizzBuzz {
	static replace(limit: number): (string | number)[] {
		const replacedFizzArray: (string | number)[] = [];
		for (let number = 1; number <= limit; number++) {
			replacedFizzArray.push(this.getReplacement(number));
		}

		return replacedFizzArray;
	}

	private static getReplacement(number: number): string | number {
		if (number % 3 == 0 && number % 5 == 0) return 'FizzBuzz';
		if (number % 7 == 0) return 'Fazz';
		if (number % 5 == 0) return 'Buzz';
		if (number % 3 == 0) return 'Fizz';

		return number;
	}

	/*private static getSolidReplacement(number: number): string | number {
		const ruleArray: RuleInterface[] = [];
		for (const rule of ruleArray) {
			if (rule.isDivisible(number)) {

			}
		}

		return number;
	}*/
}
export class FizzRule implements RuleInterface {
	getMessage(): string {
		return 'Fizz'
	}

	isDivisible(number: number): boolean {
		return number % 3 == 0;
	}
}

export interface RuleInterface {

	getMessage():string ;

	isDivisible(number: number): boolean;
}