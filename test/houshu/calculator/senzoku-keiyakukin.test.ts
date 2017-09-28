import test from "ava";
import senzokuKeiyakukin from "../../../lib/houshu/calculator/senzoku-keiyakukin";

test("1,000,000以下の場合", (t) => {
  t.deepEqual(senzokuKeiyakukin(100000), { zei: 10210, zeinuki: 89790, zeikomi: 100000 });
  t.deepEqual(senzokuKeiyakukin(1000000), { zei: 102100, zeinuki: 897900, zeikomi: 1000000 });
});

test("1,000,000を超える場合", (t) => {
  t.deepEqual(senzokuKeiyakukin(1000001), { zei: 102100, zeinuki: 897901, zeikomi: 1000001 });
  t.deepEqual(senzokuKeiyakukin(1100000), { zei: 122520, zeinuki: 977480, zeikomi: 1100000 });
  t.deepEqual(senzokuKeiyakukin(1500000), { zei: 204200, zeinuki: 1295800, zeikomi: 1500000 });
});
