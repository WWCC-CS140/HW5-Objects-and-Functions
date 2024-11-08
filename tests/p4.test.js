const p4 = require('../src/p4');

describe('Problem 04', () => {
    it('should return a function', () => {
        let counter = p4();
        expect(typeof counter).toBe('function');
    });

    it('should return 1 for the first invocation', () => {
        let counter = p4();
        expect(counter()).toEqual(1);
    });

    it('should return 3 for the third invocation', () => {
        let counter = p4();
        counter();
        counter();
        expect(counter()).toEqual(3);
    });

    it('should ignore parameters', () => {
        let counter = p4(10);
        counter(7);
        counter(8);
        expect(counter(9)).toEqual(3);
    });
});