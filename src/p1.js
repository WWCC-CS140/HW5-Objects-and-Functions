// Create an GodzillaP1 class that inherits from MonsterP1.
// Use prototypical inheritance.
// The GodzillaP1 constructor should accept a single parameter, name
// and store this on the newly created object.
//
// You do not need to write any behavior or logic,
// just make sure that all instances of GodzillaP1 are
// prototypically inheritted from MonsterP1.
//
// Hint: Object.create()
//
// Example code:
//   var player1 = new GodzillaP1('Reptar');
//   player1.name;          // 'Reptar'
//   player1.roar();        // 'Reptar ROOOOOOOARS
//   player1.destroyCity(); // 'City successfully destroyed'
var MonsterP1 = {
    roar: function () {
        console.log(this.name + ' ROOOOOOOARS');
    },

    destroyCity: function () {
        console.log('City succesfully destroyed');
        return true;
    }
};

// YOUR CODE BELOW THIS LINE

function GodzillaP1(name) {
}

module.exports = GodzillaP1;
