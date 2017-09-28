"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const TEDORI_NIDANKAI_ZEIRITSU_KINGAKU = 897900;
// 手取契約の場合の源泉徴収税額の計算
function default_1(originZeinuki) {
    const zeinuki = new bignumber_js_1.default(originZeinuki);
    if (zeinuki.lte(TEDORI_NIDANKAI_ZEIRITSU_KINGAKU)) {
        // 二段階税率の適用がある場合
        const zeikomi = zeinuki.dividedBy(0.8979).floor();
        return {
            zei: zeikomi.times(0.1021).floor().toNumber(),
            zeikomi: zeikomi.toNumber(),
            zeinuki: zeinuki.toNumber(),
        };
    }
    else {
        // 税率が10.21％の場合
        const zeikomi = zeinuki.minus(102100).dividedBy(0.7958).floor();
        return {
            zei: zeikomi.times(0.1021).floor().toNumber(),
            zeikomi: zeikomi.toNumber(),
            zeinuki: zeinuki.toNumber(),
        };
    }
}
exports.default = default_1;
