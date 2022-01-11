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
		if (number % 3 == 0) return 'Fizz';
		if (number % 5 == 0) return 'Buzz';

		return number;
	}
}
