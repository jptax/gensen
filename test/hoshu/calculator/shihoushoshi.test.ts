import test from 'ava';
import gensen from '../../../lib/hoshu/calculator/shihoushoshi';

// No.2801 司法書士等に支払う報酬・料金
// https://www.nta.go.jp/taxanswer/gensen/2801.htm

test('国税局のサンプル例', (t) => {
  const r:GensenReponse = gensen(50000);
  t.is(r.gensen, 4084);
  t.is(r.shiharai, 50000);
});

