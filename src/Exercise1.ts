const ZERO = 0;
const THREE = 3;
const FIVE = 5;
const FIZZ = 'Fizz';
const BUZZ = 'Buzz';
export class Exercises {
	public numbers: number[];

	constructor(numbers: number[]) {
		this.numbers = numbers
	}

	divisibleBy(number: number, divisor: number): boolean {
		return (number % divisor === ZERO);
	}

	modifyArray(): (number|string) [] {
		const numbersResult: (number|string)[] = this.numbers.map(actualNumber => {
			if (this.divisibleBy(actualNumber, THREE)) {
				return FIZZ;
			} else if (this.divisibleBy(actualNumber, FIVE)) {
				return BUZZ;
			}

			return actualNumber;
		});

		return numbersResult;
	}
}
