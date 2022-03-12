"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./main.css");
var puffify = function (param) { return param + 'PUFF!'; };
var pokemon = ['iggly', 'jiggly', 'wiggly'];
var _a = __read(pokemon, 2), iggly = _a[0], jiggly = _a[1];
document.body.innerHTML = puffify(jiggly);
console.log(puffify(iggly));
