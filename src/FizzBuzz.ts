export class FizzBuzz {
	static replace(limit: number): (string | number)[] {
		const replacedFizzArray: (string | number)[] = [];
		for (let number = 1; number <= limit; number++) {
			replacedFizzArray.push(this.getReplacement(number));
		}

		return replacedFizzArray;
	}

	private static getReplacement(number: number): string | number {
		const fizzRule = new FizzRule();
		const buzzRule = new BuzzRule();
		const fazzRule = new FazzRule();
		const fizzBuzzRule = new FizzBuzzRule();

		if (fizzBuzzRule.isDivisible(number)) return fizzBuzzRule.getMessage();
		if (fazzRule.isDivisible(number)) return fazzRule.getMessage();
		if (buzzRule.isDivisible(number)) return buzzRule.getMessage();
		if (fizzRule.isDivisible(number)) return fizzRule.getMessage();

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