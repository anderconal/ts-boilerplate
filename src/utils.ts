import { ZERO, THREE, FIVE, SEVEN } from './constants'

const divisibleBy = (number: number, divisor: number): boolean => (number % divisor === ZERO);

export const divisibleByThree = (number: number): boolean => divisibleBy(number, THREE);

export const divisibleByFive = (number: number): boolean => divisibleBy(number, FIVE);

export const divisibleBySeven = (number: number): boolean => divisibleBy(number, SEVEN);