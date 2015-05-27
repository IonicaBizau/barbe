// Dependencies
var RegexEscape = require("regex-escape");

/**
 * Barbe
 * Renders the input template including the data.
 *
 * @name Barbe
 * @function
 * @param {String} text The template text.
 * @param {Array} arr An array of two elements: the first one being the start snippet (default: `"{"`) and the second one being the end snippet (default: `"}"`).
 * @param {Object} data The template data.
 * @return {String} The rendered template.
 */
function Barbe(text, arr, data) {
    if (!Array.isArray(arr)) {
        data = arr;
        arr = ["{", "}"];
    }

    if (!data || data.constructor !== Object) {
        return text;
    }

    arr = arr.map(RegexEscape);

    Object.keys(data).forEach(function (c) {
        text = text.replace(new RegExp(arr[0] + c + arr[1], "g"), data[c]);
    });

    return text;
}

module.exports = Barbe;
