//changes
export class Exercises {
	public numbers: number[];

	constructor(numbers: number[]) {
		this.numbers = numbers
	}

	modifyArray(): (number|string) [] {
		const numbersResult: (number|string)[] = this.numbers.map(actualNumber => {
			const divisibleBy3 = actualNumber % 3;
			if(divisibleBy3 === 0){
				return 'Fizz';
			}

			return actualNumber;
		});

		return numbersResult;
	}
}
