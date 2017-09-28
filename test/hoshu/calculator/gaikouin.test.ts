import test from "ava";
import gensen from "../../../lib/index";

// No.2804　外交員等に支払う報酬・料金
// https://www.nta.go.jp/taxanswer/gensen/2804.htm

test("報酬・料金を20万円支払う場合", (t) => {
  t.deepEqual(
    gensen.hoshu.gaikouin(200000),
    {
      zei: 8168,
      zeikomi: 200000,
      zeinuki: 191832,
    });
});

test("報酬・料金20万円と給与5万円を支払う場合", (t) => {
  t.deepEqual(
    gensen.hoshu.gaikouin(200000, 50000),
    {
      zei: 13273,
      zeikomi: 200000,
      zeinuki: 186727,
    });
});

test("報酬・料金20万円と給与15万円を支払う場合", (t) => {
  t.deepEqual(
    gensen.hoshu.gaikouin(200000, 150000),
    {
      zei: 20420,
      zeikomi: 200000,
      zeinuki: 179580,
    });
});
