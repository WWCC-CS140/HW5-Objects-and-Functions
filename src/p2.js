// Create an GodzillaP2 class that inherits from MonsterP2.
// Use classical inheritance.
// The GodzillaP2 constructor should accept a single parameter, name
// and store this on the newly created object.
//
// You do not need to write any behavior or logic,
// just make sure that all instances of GodzillaP2 are
// classically inheritted from Monster.
//
// Hint: GodzillaP2.prototype
//
// Example code:
//   var player1 = new GodzillaP2('Reptar');
//   player1.name;          // 'Reptar'
//   player1.roar();        // 'Reptar ROOOOOOOARS
//   player1.destroyCity(); // 'City successfully destroyed'
var MonsterP2 = {
    roar: function () {
        console.log(this.name + ' ROOOOOOOARS');
    },

    destroyCity: function () {
        console.log('City succesfully destroyed');
        return true;
    }
};

// YOUR CODE BELOW THIS LINE

function GodzillaP2(name) {
}

module.exports = GodzillaP2;
