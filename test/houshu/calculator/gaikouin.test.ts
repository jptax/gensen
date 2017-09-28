import test from "ava";
import gensen from "../../../lib/index";

// No.2804　外交員等に支払う報酬・料金
// https://www.nta.go.jp/taxanswer/gensen/2804.htm

test("報酬・料金を20万円支払う場合（控除フル適用）", (t) => {
  t.deepEqual(
    gensen.houshu.gaikouin(200000),
    {
      zei: 8168,
      zeikomi: 200000,
      zeinuki: 191832,
    });
});

test("控除を引くと報酬が0円になる場合", (t) => {
  t.deepEqual(
    gensen.houshu.gaikouin(120000),
    {
      zei: 0,
      zeikomi: 120000,
      zeinuki: 120000,
    });

  t.deepEqual(
    gensen.houshu.gaikouin(70000, 50000),
    {
      zei: 0,
      zeikomi: 70000,
      zeinuki: 70000,
    });
});

test("控除を引くとマイナスになる場合", (t) => {
  t.deepEqual(
    gensen.houshu.gaikouin(119999),
    {
      zei: 0,
      zeikomi: 119999,
      zeinuki: 119999,
    });

  t.deepEqual(
    gensen.houshu.gaikouin( 69999, 50000),
    {
      zei: 0,
      zeikomi: 69999,
      zeinuki: 69999,
    });
});

test("報酬・料金20万円と給与5万円を支払う場合（控除から給与分引かれる）", (t) => {
  t.deepEqual(
    gensen.houshu.gaikouin(200000, 50000),
    {
      zei: 13273,
      zeikomi: 200000,
      zeinuki: 186727,
    });
});

test("報酬・料金20万円と給与15万円を支払う場合（控除0円）", (t) => {
  t.deepEqual(
    gensen.houshu.gaikouin(200000, 150000),
    {
      zei: 20420,
      zeikomi: 200000,
      zeinuki: 179580,
    });
});

test("報酬・料金20万円と給与119999円を支払う場合", (t) => {
  t.deepEqual(
    gensen.houshu.gaikouin(200000, 119999),
    {
      zei: 20419,
      zeikomi: 200000,
      zeinuki: 179581,
    });
});

test("報酬・料金20万円と給与12万円を支払う場合", (t) => {
  t.deepEqual(
    gensen.houshu.gaikouin(200000, 120000),
    {
      zei: 20420,
      zeikomi: 200000,
      zeinuki: 179580,
    });
});

test("報酬・料金20万円と給与120001円を支払う場合", (t) => {
  t.deepEqual(
    gensen.houshu.gaikouin(200000, 120001),
    {
      zei: 20420,
      zeikomi: 200000,
      zeinuki: 179580,
    });
});
