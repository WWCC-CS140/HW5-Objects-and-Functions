const GodzillaP1 = require('../src/p1');

describe('Problem 01', () => {
    it('should have property "name"', () => {
        let reptar = GodzillaP1('Reptar');
        expect(reptar).toHaveProperty('name', 'Reptar');

        let mecha = GodzillaP1('Mecha Godzilla');
        expect(mecha).toHaveProperty('name', 'Mecha Godzilla');
    });

    it('should have method "roar" on prototype chain', () => {
        let reptar = GodzillaP1('Reptar');
        expect(reptar).toHaveProperty('roar');
        expect(typeof reptar.roar).toEqual('function');
        expect(reptar.hasOwnProperty('roar')).toEqual(false);
    });

    it('should have method "destroyCity" on prototype chain', () => {
        let reptar = GodzillaP1('Reptar');
        expect(reptar).toHaveProperty('destroyCity');
        expect(typeof reptar.destroyCity).toEqual('function');
        expect(reptar.hasOwnProperty('destroyCity')).toEqual(false);
    });

    it('should not use GodzillaP1.prototype', () => {
        expect(GodzillaP1.prototype.roar).not.toBeDefined();
    });
});