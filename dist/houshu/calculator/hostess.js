"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const HOSTESS_KOUJO_OF_DAY = 5000;
function default_1(originZeikomi, nissu) {
    const koujo = HOSTESS_KOUJO_OF_DAY * nissu;
    const zeikomi = new bignumber_js_1.default(originZeikomi);
    const zei = calculateZei(zeikomi, nissu);
    return {
        zei: zei.toNumber(),
        zeikomi: zeikomi.toNumber(),
        zeinuki: zeikomi.minus(zei).toNumber(),
    };
}
exports.default = default_1;
const calculateZei = (zeikomi, nissu) => {
    const base = zeikomi.minus(HOSTESS_KOUJO_OF_DAY * nissu);
    if (base.lte(0)) {
        return new bignumber_js_1.default(0);
    }
    return base.times(0.1021).floor();
};
