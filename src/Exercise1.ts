import { FIZZ, BUZZ } from './constants';
import { divisibleByThree, divisibleByFive } from './utils';
export class Exercises {
	public numbers: number[];

	constructor(numbers: number[]) {
		this.numbers = numbers
	}

	modifyArray(): (number|string) [] {
		const numbersResult: (number|string)[] = this.numbers.map(actualNumber => {
			if (
				divisibleByThree(actualNumber) &&
				divisibleByFive(actualNumber)
			) {
				return FIZZ + BUZZ;
			} else if (divisibleByThree(actualNumber)) {
				return FIZZ;
			} else if (divisibleByFive(actualNumber)) {
				return BUZZ;
			}

			return actualNumber;
		});

		return numbersResult;
	}
}
