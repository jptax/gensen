"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
// No.2804　外交員等に支払う報酬・料金
// https://www.nta.go.jp/taxanswer/gensen/2804.htm
const GAIKOUIN_KYUYO_KOUJO_KINGAKU = 120000;
function default_1(originZeikomi, originKyuyo = 0) {
    const zeikomi = new bignumber_js_1.default(originZeikomi);
    let koujo = new bignumber_js_1.default(GAIKOUIN_KYUYO_KOUJO_KINGAKU);
    koujo = koujo.minus(originKyuyo);
    if (koujo.lessThan(0)) {
        koujo = new bignumber_js_1.default(0);
    }
    let zei = zeikomi.minus(koujo);
    if (zei.lessThan(0)) {
        zei = new bignumber_js_1.default(0);
    }
    else {
        zei = zei.times(0.1021).floor();
    }
    return {
        zei: zei.toNumber(),
        zeikomi: zeikomi.toNumber(),
        zeinuki: zeikomi.minus(zei).toNumber(),
    };
}
exports.default = default_1;
