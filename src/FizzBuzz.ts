export class FizzBuzz {
	static replace(limit: number): (string | number)[] {
		const replacedFizzArray: (string | number)[] = [];
		for (let i = 1; i <= limit; i++) {
			replacedFizzArray.push(this.getReplacement(i));
		}

		return replacedFizzArray;
	}

	private static getReplacement(i: number): string | number {
		if (i % 3 == 0 && i % 5 == 0) return 'FizzBuzz';
		if (i % 3 == 0) return 'Fizz';
		if (i % 5 == 0) return 'Buzz';

		return i;
	}
}
