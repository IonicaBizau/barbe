"use strict";

const tester = require("tester")
    , barbe = require("../lib")
    ;

tester.describe("barbe", test => {
    test.should("support one level strings with default separators", () => {
        test.expect(barbe("Hello {world}!", {
            world: "Mars"
        })).toBe("Hello Mars!");
    });

    // Custom separators, strings & functions
    test.should("support one level strings and functions with custom separators", () => {
        test.expect(barbe("Hello <world> from <earth>!", ["<", ">"], {
            world: "Mars"
          , earth: () => {
                return "Earth";
            }
        })).toBe("Hello Mars from Earth!");
    });


    // Deep replacing
    test.should("support deep replacing", () => {
        test.expect(barbe("Hello {{worlds.pluto}} from {{worlds.earth}}!", ["{{", "}}"], {
            worlds: {
                pluto: () => {
                    return "Pluto";
                }
              , earth: "Earth"
            }
        })).toBe("Hello Pluto from Earth!");
    });

    test.should("not throw if null", () => {
        test.expect(barbe("Hello {{world}}!", ["{{", "}}"], {
            world: null
        })).toBe("Hello null!");
    });
});
