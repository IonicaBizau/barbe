var Barbe = require("../lib");

console.log(Barbe("Hello {world}!", {
    world: "Mars"
}));

console.log(Barbe("Hello <world>!", ["<", ">"], {
    world: "World"
}));

console.log(Barbe("Hello ###world##!", ["###", "##"], {
    world: "World"
}));

console.log(Barbe("Hello ###world##!", ["###", "##"], {
    world: function () {
        return "Sun";
    }
}));
