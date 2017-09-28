import test from "ava";
import hostess from "../../../lib/hoshu/calculator/hostess";

test("国税局のサンプル例", (t) => {
  t.deepEqual(hostess(750000, 31), { zei: 60749, zeinuki: 689251, zeikomi: 750000 });
});

test("源泉徴収額の計算結果がマイナスとなる場合", (t) => {
  t.deepEqual(hostess(100000, 31), { zei: 0, zeinuki: 100000, zeikomi: 100000 });
});
