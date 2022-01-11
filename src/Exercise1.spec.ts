import { Exercises } from './Exercise1'

describe('Exercise 1', () => {
	const expected = [1,2];
	it('Exercises class exist', () => {
		const exercisesClass = new Exercises(expected);
		expect(exercisesClass).toBeDefined()
	})

	it('Exercises constructor with params exist', () => {
		const exercisesClass = new Exercises(expected);
		expect(exercisesClass).toBeDefined()
	})

	it('modifyArray functions exist', () => {
		const exercisesClass = new Exercises(expected);
		expect(exercisesClass.modifyArray()).toBeDefined()
	})

	it('modifyArray function return [1,2]', () => {
		const exercisesClass = new Exercises(expected);
		expect(exercisesClass.modifyArray()).toEqual(expect.arrayContaining(expected));
	})

	it('modifyArray function return [1,2,"Fizz"]', () => {
		const exercisesClass = new Exercises([1,2,3]);
		expect(exercisesClass.modifyArray()).toEqual(expect.arrayContaining([1,2,'Fizz']));
	})

	it('modifyArray function return [1,2,"Fizz","Buzz",4,"Fizz"]', () => {
		const exercisesClass = new Exercises([1,2,3,5,4,9]);
		expect(exercisesClass.modifyArray()).toEqual(expect.arrayContaining([1,2,'Fizz','Buzz',4,'Fizz']));
	})

	it('modifyArray function return [1,2,"Fizz","Buzz",4,"Fizz", "Fizz", "FizzBuzz"]', () => {
		const exercisesClass = new Exercises([1, 2, 3, 5, 4, 9, 12, 15]);
		expect(exercisesClass.modifyArray()).toEqual(
			expect.arrayContaining([1, 2, 'Fizz', 'Buzz', 4, 'Fizz', 'Fizz', 'FizzBuzz'])
		);
	});
});
