//changes
export class Exercises {
	public numbers: number[];

	constructor(numbers: number[]) {
		this.numbers = numbers
	}

	modifyArray(): (number|string) [] {
		const numbersResult: (number|string)[] = this.numbers.map(actualNumber => {
			const divisibleBy3 = actualNumber % 3;
			const divisibleBy5 = actualNumber % 5;
			if(divisibleBy3 === 0){
				return 'Fizz';
			}
			if(divisibleBy5 === 0){
				return 'Buzz';
			}

			return actualNumber;
		});

		return numbersResult;
	}
}
