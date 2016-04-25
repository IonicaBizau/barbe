const barbe = require("../lib");

// Use {curly braces}, which is default
console.log(barbe("Hello {world}!", {
    world: "Mars"
}));
// => "Hello Mars!"

// Different separators
console.log(barbe("Hello <world>!", ["<", ">"], {
    world: "World"
}));
// => "Hello World!"

// Use a function instead of a string
console.log(barbe("Hello ###world##!", ["###", "##"], {
    world: function () {
        return "Sun";
    }
}));
// => "Hello Sun!"

// Use a function instead of a string
console.log(barbe("Hello {{worlds.pluto}} from {{worlds.earth}}!", ["{{", "}}"], {
    worlds: {
        pluto: function () {
            return "Pluto";
        }
      , earth: "Earth"
    }
}));
// => "Hello Pluto from Earth!"
