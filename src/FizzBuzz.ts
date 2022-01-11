export class FizzBuzz {
	static replace(limit: number): (string | number)[] {
		// const numbersArray: number[] = [];
		const replacedFizzArray: (string | number)[] = [];
		for (let i = 1; i <= limit; i++) {
			if (i % 3 == 0) {
				replacedFizzArray.push('Fizz');
			} else if (i % 5 == 0) {
				replacedFizzArray.push('Buzz');
			} else {
				replacedFizzArray.push(i);
			}
		}

		return replacedFizzArray;
	}
}
