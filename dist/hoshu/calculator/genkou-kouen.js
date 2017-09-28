"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://www.nta.go.jp/taxanswer/gensen/2795.htm
const bignumber_js_1 = require("bignumber.js");
const standard_1 = require("./standard");
// 懸賞応募作品などの入選者に対する賞金や新聞、雑誌などの投稿欄への投稿の謝金などは、
// 原則として原稿料に含まれますが、一人に対して支払う賞金や謝金の金額が、1回5万円以下であれば、
// 源泉徴収をしなくてもよいことになっています。
const GENKO_KOUEN_MENZEI_KINGAKU = 50000;
function default_1(originKingaku) {
    const kingaku = new bignumber_js_1.default(originKingaku);
    if (kingaku.lte(GENKO_KOUEN_MENZEI_KINGAKU)) {
        return {
            zei: 0,
            zeikomi: kingaku.toNumber(),
            zeinuki: kingaku.toNumber(),
        };
    }
    return standard_1.default(originKingaku);
}
exports.default = default_1;
