export class ReplaceArrayByRules {
	private static getArrayRules(): RuleInterface[] {
		const rulesArray:RuleInterface[] = [];
		rulesArray.push(new FizzBuzzRule(), new FazzRule(), new BuzzRule(), new FizzRule());

		return rulesArray;
	}

	static replace(limit: number): (string | number)[] {
		const replacedFizzArray: (string | number)[] = [];
		for (let number = 1; number <= limit; number++) {
			replacedFizzArray.push(this.getReplacement(number));
		}

		return replacedFizzArray;
	}

	private static getReplacement(number: number): string | number {
		const rulesArray: RuleInterface[] = this.getArrayRules();
		for (const rule of rulesArray) {
			if (rule.isDivisible(number)) {
				return rule.getMessage()
			}
		}

		return number;
	}

	// TODO talk with Iñaki
	/*private static getSolidReplacement(number: number): string | number {
		const ruleArray: RuleInterface[] = [FizzRule];
		for (const rule of ruleArray) {
			if (rule.isDivisible(number)) {
				retun rule.getMessage()
			}
		}

		return number;
	}*/
}

export class FazzRule implements RuleInterface {
	getMessage(): string {
		return 'Fazz'
	}

	isDivisible(number: number): boolean {
		return number % 7 == 0;
	}
}

export class BuzzRule implements RuleInterface {
	getMessage(): string {
		return 'Buzz'
	}

	isDivisible(number: number): boolean {
		return number % 5 == 0;
	}
}

export class FizzRule implements RuleInterface {
	getMessage(): string {
		return 'Fizz'
	}

	isDivisible(number: number): boolean {
		return number % 3 == 0;
	}
}

export class FizzBuzzRule implements RuleInterface {
	getMessage(): string {
		return 'FizzBuzz'
	}

	isDivisible(number: number): boolean {
		return (number % 3 == 0 && number % 5 == 0);
	}
}

export interface RuleInterface {

	getMessage():string ;

	isDivisible(number: number): boolean;
}