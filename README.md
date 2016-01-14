[![barbe](http://i.imgur.com/tcg2ZNt.png)](#)

# barbe [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/node-barbe.svg)](https://travis-ci.org/IonicaBizau/node-barbe/) [![Version](https://img.shields.io/npm/v/barbe.svg)](https://www.npmjs.com/package/barbe) [![Downloads](https://img.shields.io/npm/dt/barbe.svg)](https://www.npmjs.com/package/barbe) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Like mustache, but simple, tiny and fast.

## Installation

```sh
$ npm i --save barbe
```

## Example

```js
// Require barbe
var Barbe = require("barbe");

// Use {curly braces}, which is default
console.log(Barbe("Hello {world}!", {
    world: "Mars"
}));
// => "Hello Mars!"

// Different separators
console.log(Barbe("Hello <world>!", ["<", ">"], {
    world: "World"
}));
// => "Hello World!"

// Use a function instead of a string
console.log(Barbe("Hello ###world##!", ["###", "##"], {
    world: function () {
        return "Sun";
    }
}));
// => "Hello Sun!"

// Use a function instead of a string
console.log(Barbe("Hello {{worlds.pluto}} from {{worlds.earth}}!", ["{{", "}}"], {
    worlds: {
        pluto: function () {
            return "Pluto";
        }
      , earth: "Earth"
    }
}));
// => "Hello Pluto from Earth!"
```

## Documentation

### `Barbe(text, arr, data)`
Renders the input template including the data.

#### Params
- **String** `text`: The template text.
- **Array** `arr`: An array of two elements: the first one being the start snippet (default: `"{"`) and the second one being the end snippet (default: `"}"`).
- **Object** `data`: The template data.

#### Return
- **String** The rendered template.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`github-old-header`](https://github.com/IonicaBizau/github-old-header)

 - [`kindly-license`](https://github.com/IonicaBizau/kindly-license)

 - [`match`](https://github.com/IonicaBizau/match.js#readme)

 - [`medium-editor-markdown`](https://github.com/IonicaBizau/medium-editor-markdown)

 - [`showalicense.com`](https://github.com/IonicaBizau/showalicense.com#readme)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md