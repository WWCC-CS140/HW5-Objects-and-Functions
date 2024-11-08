const p5 = require('../src/p5');

describe('Problem 05', () => {
    it('should return a function', () => {
        let acc = p5();
        expect(typeof acc).toBe('function');
    });

    it('should keep track of the sum after the first invocation', () => {
        let acc = p5();
        expect(acc(5)).toEqual(5);
    });

    it('should keep track of the sum after the third invocation', () => {
        let acc = p5();
        acc(7);
        acc(-2);
        expect(acc(4)).toEqual(9);
    });
});