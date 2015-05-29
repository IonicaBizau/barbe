// Require barbe
var Barbe = require("../lib");

// Use {curly braces}, which is default
console.log(Barbe("Hello {world}!", {
    world: "Mars"
}));

// Different separators
console.log(Barbe("Hello <world>!", ["<", ">"], {
    world: "World"
}));

// Use a function instead of a string
console.log(Barbe("Hello ###world##!", ["###", "##"], {
    world: function () {
        return "Sun";
    }
}));