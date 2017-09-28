import test from "ava";
import proBoxer from "../../../lib/houshu/calculator/pro-boxer";

// プロボクサーの業務に関する報酬・料金
// http://www.nta.go.jp/shiraberu/ippanjoho/pamph/gensen/shikata2017/pdf/09.pdf

test("50,000以下の場合", (t) => {
  t.deepEqual(proBoxer(30000), { zei: 0, zeinuki: 30000, zeikomi: 30000 });
  t.deepEqual(proBoxer(50000), { zei: 0, zeinuki: 50000, zeikomi: 50000 });
});

test("50,000を超える場合", (t) => {
  t.deepEqual(proBoxer(50001), { zei: 0, zeinuki: 50001, zeikomi: 50001 });
  t.deepEqual(proBoxer(100000), { zei: 5105, zeinuki: 94895, zeikomi: 100000 });
  t.deepEqual(proBoxer(500000), { zei: 45945, zeinuki: 454055, zeikomi: 500000 });
});
