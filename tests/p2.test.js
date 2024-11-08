const GodzillaP2 = require('../src/p2');

describe('Problem 02', () => {
    it('should have property "name"', () => {
        let reptar = new GodzillaP2('Reptar');
        expect(reptar).toHaveProperty('name', 'Reptar');

        let mecha = new GodzillaP2('Mecha Godzilla');
        expect(mecha).toHaveProperty('name', 'Mecha Godzilla');
    });

    it('should have method "roar" on prototype chain', () => {
        let reptar = new GodzillaP2('Reptar');
        expect(reptar).toHaveProperty('roar');
        expect(typeof reptar.roar).toEqual('function');
        expect(reptar.hasOwnProperty('roar')).toEqual(false);
    });

    it('should have method "destroyCity" on prototype chain', () => {
        let reptar = new GodzillaP2('Reptar');
        expect(reptar).toHaveProperty('destroyCity');
        expect(typeof reptar.destroyCity).toEqual('function');
        expect(reptar.hasOwnProperty('destroyCity')).toEqual(false);
    });

    it('should use GodzillaP2.prototype', () => {
        expect(GodzillaP2.prototype.roar).toBeDefined();
    });
});