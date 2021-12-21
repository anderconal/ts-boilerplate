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

	it('fizz functions exist', () => {
		const exercisesClass = new Exercises(expected);
		expect(exercisesClass.fizz()).toBeDefined()
	})

	it('fizz function return [1,2]', () => {
		const exercisesClass = new Exercises(expected);
		expect(exercisesClass.fizz()).toEqual(expect.arrayContaining(expected));
	})

	it('fizz function return [1,2,"Fizz"]', () => {
		const exercisesClass = new Exercises([1,2,3]);
		expect(exercisesClass.fizz()).toEqual(expect.arrayContaining([1,2,'Fizz']));
	})
})

