
[![barbe](http://i.imgur.com/tcg2ZNt.png)](#)

# barbe

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/barbe.svg)](https://travis-ci.org/IonicaBizau/barbe/) [![Version](https://img.shields.io/npm/v/barbe.svg)](https://www.npmjs.com/package/barbe) [![Downloads](https://img.shields.io/npm/dt/barbe.svg)](https://www.npmjs.com/package/barbe) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Like mustache, but simple, tiny and fast.

## :cloud: Installation

```sh
$ npm i --save barbe
```


## :clipboard: Example



```js
const barbe = require("barbe");

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
```

## :memo: Documentation


### `barbe(text, arr, data)`
Renders the input template including the data.

#### Params
- **String** `text`: The template text.
- **Array** `arr`: An array of two elements: the first one being the start snippet (default: `"{"`) and the second one being the end snippet (default: `"}"`).
- **Object** `data`: The template data.

#### Return
- **String** The rendered template.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`emojer`](https://github.com/IonicaBizau/emojer#readme)—Emojify all the things.
 - [`err`](https://github.com/IonicaBizau/err#readme)—A tiny library to create custom errors in JavaScript.
 - [`github-old-header`](https://github.com/IonicaBizau/github-old-header)—Brings the old header links back.
 - [`kindly-license`](https://github.com/IonicaBizau/kindly-license)—A human readable license for projects created by human-beings.
 - [`match`](https://github.com/IonicaBizau/match.js#readme)—Simplest way to create match memory games.
 - [`ship-release`](https://github.com/IonicaBizau/ship-release#readme)—Publish new versions on GitHub and npm with ease.
 - [`showalicense.com`](https://github.com/IonicaBizau/showalicense.com#readme)—A site to provide an easy way to show licenses and their human-readable explanations.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
