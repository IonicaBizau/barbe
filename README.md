[![barbe](http://i.imgur.com/tcg2ZNt.png)](#)

# barbe [![Support this project][donate-now]][paypal-donations]

Like mustache, but simple, tiny and fast.

## Installation

```sh
$ npm i barbe
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

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md