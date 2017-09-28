import test from "ava";
import gensen from "../../../lib/index";

// 社会保険診療報酬支払基金が支払う診療報酬
// http://www.nta.go.jp/shiraberu/ippanjoho/pamph/gensen/shikata2017/pdf/09.pdf

test("20万円を引いた時にマイナスであれば源泉徴収は0とする", (t) => {
  t.deepEqual(
    gensen.houshu.shinryou(199999),
    {
      zei: 0,
      zeikomi: 199999,
      zeinuki: 199999,
    });
});

test("20万円ちょうどの場合", (t) => {
  t.deepEqual(
    gensen.houshu.shinryou(200000),
    {
      zei: 0,
      zeikomi: 200000,
      zeinuki: 200000,
    });
});

test("小数点以下切り捨て", (t) => {
  t.deepEqual(
    gensen.houshu.shinryou(300001),
    {
      zei: 10210,
      zeikomi: 300001,
      zeinuki: 289791,
    });
});

test("100万円を超える場合も、10.21%で計算される", (t) => {
  t.deepEqual(gensen.houshu.shinryou(2000000),
    {
      zei: 183780,
      zeikomi: 2000000,
      zeinuki: 1816220,
    });
});
