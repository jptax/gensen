import test from "ava";
import gensen from "../../../lib/index";

// No.2801 司法書士等に支払う報酬・料金
// https://www.nta.go.jp/taxanswer/gensen/2801.htm

test("国税局のサンプル例", (t) => {
  t.deepEqual(
    gensen.hoshu.shihoushoshi(50000),
    {
      zei: 4084,
      zeikomi: 50000,
      zeinuki: 45916,
    });
});

test("1万円を引いた時にマイナスであれば源泉徴収は0とする", (t) => {
  t.deepEqual(
    gensen.hoshu.shihoushoshi(9999),
    {
      zei: 0,
      zeikomi: 9999,
      zeinuki: 9999,
    });
});

test("1万円ちょうどの場合", (t) => {
  t.deepEqual(
    gensen.hoshu.shihoushoshi(10000),
    {
      zei: 0,
      zeikomi: 10000,
      zeinuki: 10000,
    });
});

test("小数点以下切り捨て", (t) => {
  t.deepEqual(
    gensen.hoshu.shihoushoshi(50001),
    {
      zei: 4084,
      zeikomi: 50001,
      zeinuki: 45917,
    });
});

test("100万円を超える場合も、10.21%で計算される", (t) => {
  t.deepEqual(gensen.hoshu.shihoushoshi(1000001),
    {
      zei: 101079,
      zeikomi: 1000001,
      zeinuki: 898922,
    });
});
