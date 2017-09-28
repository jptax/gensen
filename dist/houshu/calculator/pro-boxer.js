"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
// プロボクサーの業務に関する報酬・料金
// http://www.nta.go.jp/shiraberu/ippanjoho/pamph/gensen/shikata2017/pdf/09.pdf
const BOXER_KOUJO_KINGAKU = 50000;
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
const calculateZei = (zeikomi) => (zeikomi.lte(BOXER_KOUJO_KINGAKU) ?
    new bignumber_js_1.default(0) :
    zeikomi.minus(BOXER_KOUJO_KINGAKU).times(0.1021).floor());
