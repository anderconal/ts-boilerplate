import { FIZZ, BUZZ, FAZZ } from './constants';
import { divisibleByThree, divisibleByFive, divisibleBySeven } from './utils';
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
			} else if (divisibleBySeven(actualNumber)) {
				return FAZZ;
			}

			return actualNumber;
		});

		return numbersResult;
	}
}
