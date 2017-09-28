"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
function default_1(originZeikomi) {
    const zeikomi = new bignumber_js_1.default(originZeikomi);
    let zei = zeikomi.minus(10000).times(0.1021).floor();
    if (zei.lessThan(0)) {
        zei = new bignumber_js_1.default(0);
    }
    const zeinuki = zeikomi.minus(zei);
    return {
        zei: zei.toNumber(),
        zeikomi: originZeikomi,
        zeinuki: zeinuki.toNumber(),
    };
}
exports.default = default_1;
