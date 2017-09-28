"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const CHANGE_CALCULATE_LOGIC_LINE = 1000000;
function default_1(originZeikomi) {
    const zeikomi = new bignumber_js_1.default(originZeikomi);
    const zei = calculateZei(zeikomi);
    return {
        zei: zei.toNumber(),
        zeikomi: zeikomi.toNumber(),
        zeinuki: zeikomi.minus(zei).toNumber(),
    };
}
exports.default = default_1;
const calculateZei = (zeikomi) => {
    return zeikomi.lte(CHANGE_CALCULATE_LOGIC_LINE) ?
        zeikomi.times(0.1021).floor() :
        zeikomi.minus(CHANGE_CALCULATE_LOGIC_LINE).times(0.2042).plus(102100).floor();
};
