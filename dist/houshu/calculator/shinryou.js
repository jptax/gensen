"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
/** 社会保険診療報酬支払基金が支払う診療報酬に係る控除額 */
const SHINRYOU_KOUJO = 200000;
/**
 * 社会保険診療報酬支払基金が支払う診療報酬
 * http://www.nta.go.jp/shiraberu/ippanjoho/pamph/gensen/shikata2017/pdf/09.pdf
 * @param originZeikomi 支払金額
 */
function default_1(originZeikomi) {
    const zeikomi = new bignumber_js_1.default(originZeikomi);
    let zei = zeikomi.minus(SHINRYOU_KOUJO).times(0.1021).floor();
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
