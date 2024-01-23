// src/circle.test.ts
import { calculateCircleArea } from './circle';

test('calculates the area of a circle with radius 5', () => {
    expect(calculateCircleArea(5)).toBeCloseTo(78.53981633974483);
});

test('throws an error if radius is negative', () => {
    expect(() => calculateCircleArea(-1)).toThrow("Radius cannot be negative.");
});
