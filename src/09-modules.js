// lib/math.js
export function sum(x, y) {
    return x + y;
}
export var pi = 3.141593;

// app.js
import * as math from "lib/math";
alert("2pi = " + math.sum(math.pi, math.pi));

// otherApp.js
import {sum, pi} from "lib/math";
alert("2pi = " + sum(pi, pi));



// lib/math.js
export function sum(x, y) {
    return x + y;
}
export var pi = 3.141593;

// lib/mathplusplus.js
export * from "lib/math";
export var e = 2.71828182846;
export default x => Math.exp(x);
}

// app.js
import exp, {pi, e} from "lib/mathplusplus";
alert("e**pi + e = " + (exp(pi) + e) );