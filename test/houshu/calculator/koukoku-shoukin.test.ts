import test from "ava";
import gensen from "../../../lib/index";

// No.2813　広告宣伝のために支払う賞金等
// https://www.nta.go.jp/taxanswer/gensen/2813.htm

test("賞金が50万以下の場合は源泉徴収しない", (t) => {
  t.deepEqual(
    gensen.houshu.koukokuShoukin(10000),
    {
      zei: 0,
      zeikomi: 10000,
      zeinuki: 10000,
    });
});

test("賞金が50万以下の場合は源泉徴収しない（50万ちょうど）", (t) => {
  t.deepEqual(
    gensen.houshu.koukokuShoukin(500000),
    {
      zei: 0,
      zeikomi: 500000,
      zeinuki: 500000,
    });
});

test("賞金が500001円の場合は50万を差引いて源泉徴収する（ただし税金が0円になる）", (t) => {
  t.deepEqual(
    gensen.houshu.koukokuShoukin(500001),
    {
      zei: 0,
      zeikomi: 500001,
      zeinuki: 500001,
    });
});

test("賞金が500001円の場合は50万を差引いて源泉徴収する（税金が1円以上）", (t) => {
  t.deepEqual(
    gensen.houshu.koukokuShoukin(500010),
    {
      zei: 1,
      zeikomi: 500010,
      zeinuki: 500009,
    });
});
