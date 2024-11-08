const p3 = require('../src/p3');

describe('Problem 03', () => {
    it('should return 0 for zero arguments', () => {
        expect(p3()).toEqual(0);
    });

    it('should return the sum of two arguments', () => {
        expect(p3(7, 8)).toEqual(15);
    });

    it('should return the sum of five arguments', () => {
        expect(p3(0, 1, 2, 3, 4,)).toEqual(10);
    });

    it('should return the sum of one hundred arguments', () => {
        let args = [];
        args.length = 100;
        args.fill(0);
        args[10] = 10;
        args[20] = -20;
        args[80] = 5;

        expect(p3.apply(null, args)).toEqual(-5);
    });
});