import test from 'ava';
import gensen from '../../../lib/hoshu/calculator/shihoushoshi';

// No.2801 司法書士等に支払う報酬・料金
// https://www.nta.go.jp/taxanswer/gensen/2801.htm

test('国税局のサンプル例', (t) => {
  const r:GensenReponse = gensen(50000);
  t.is(r.gensen, 4084);
  t.is(r.shiharai, 50000);
});

test('1万円を引いた時にマイナスであれば源泉徴収は0とする', (t) => {
  const r:GensenReponse = gensen(9999);
  t.is(r.gensen, 0);
  t.is(r.shiharai, 9999);
});

test('1万円ちょうどの場合', (t) => {
  const r:GensenReponse = gensen(10000);
  t.is(r.gensen, 0);
  t.is(r.shiharai, 10000);
});

test('小数点以下切り捨て', (t) => {
  const r:GensenReponse = gensen(50001);
  t.is(r.gensen, 4084);
  t.is(r.shiharai, 50001);
});

test('100万円を超える場合も、10.21%で計算される', (t) => {
  const r:GensenReponse = gensen(1000001);
  t.is(r.gensen, 101079);
  t.is(r.shiharai, 1000001);
});