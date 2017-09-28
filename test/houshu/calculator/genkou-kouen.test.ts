// https://www.nta.go.jp/taxanswer/gensen/2795.htm

import test from "ava";
import gensen from "../../../lib/index";

test("50,000以下の場合", (t) => {
  t.deepEqual(gensen.houshu.genkouKouen(100), { zei: 0, zeinuki: 100, zeikomi: 100 });
  t.deepEqual(gensen.houshu.genkouKouen(10000), { zei: 0, zeinuki: 10000, zeikomi: 10000 });
  t.deepEqual(gensen.houshu.genkouKouen(50000), { zei: 0, zeinuki: 50000, zeikomi: 50000 });
});

test("50,000を超え、1,000,000以下の場合", (t) => {
  t.deepEqual(gensen.houshu.genkouKouen(50001), { zei: 5105, zeinuki: 44896, zeikomi: 50001 });
  t.deepEqual(gensen.houshu.genkouKouen(100000), { zei: 10210, zeinuki: 89790, zeikomi: 100000 });
  t.deepEqual(gensen.houshu.genkouKouen(1000000), { zei: 102100, zeinuki: 897900, zeikomi: 1000000 });
});

test("1,000,000を超える場合", (t) => {
  t.deepEqual(gensen.houshu.genkouKouen(1000001), { zei: 102100, zeinuki: 897901, zeikomi: 1000001 });
  t.deepEqual(gensen.houshu.genkouKouen(1100000), { zei: 122520, zeinuki: 977480, zeikomi: 1100000 });
  t.deepEqual(gensen.houshu.genkouKouen(1500000), { zei: 204200, zeinuki: 1295800, zeikomi: 1500000 });
});
