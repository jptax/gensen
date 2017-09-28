import test from "ava";
import gensen from "../../../lib/index";

// P21 13 馬主に支払う競馬の賞金
// http://www.nta.go.jp/shiraberu/ippanjoho/pamph/gensen/shikata2017/pdf/09.pdf
// {支払金額 - (支払金額 * 20% + 60万)} * 10.21%

test("賞金100万の場合", (t) => {
  t.deepEqual(
    gensen.houshu.banushi(1000000),
    {
      zei: 20420,
      zeikomi: 1000000,
      zeinuki: 979580,
    });
});

test("賞金7500013円の場合（税金が1円になる下限）", (t) => {
  t.deepEqual(
    gensen.houshu.banushi(750013),
    {
      zei: 1,
      zeikomi: 750013,
      zeinuki: 750012,
    });
});

test("賞金75万円の場合（0になる境界値）", (t) => {
  t.deepEqual(
    gensen.houshu.banushi(750000),
    {
      zei: 0,
      zeikomi: 750000,
      zeinuki: 750000,
    });
});

test("賞金749999円（0になる境界値未満）", (t) => {
  t.deepEqual(
    gensen.houshu.banushi(749999),
    {
      zei: 0,
      zeikomi: 749999,
      zeinuki: 749999,
    });
});
