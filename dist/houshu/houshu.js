"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator");
function houshu(originZeikomi) {
    return calculator_1.default.standard(originZeikomi);
}
exports.houshu = houshu;
/* tslint:disable */
(function (houshu) {
    houshu.banushi = calculator_1.default.banushi;
    houshu.gaikouin = calculator_1.default.gaikouin;
    houshu.hostess = calculator_1.default.hostess;
    houshu.koukokuShoukin = calculator_1.default.koukokuShoukin;
    houshu.proBoxer = calculator_1.default.proBoxer;
    houshu.shihoushoshi = calculator_1.default.shihoushoshi;
    houshu.shinryou = calculator_1.default.shinryou;
    houshu.standard = calculator_1.default.standard;
    houshu.tedori = calculator_1.default.tedori;
})(houshu = exports.houshu || (exports.houshu = {}));
exports.default = houshu;
