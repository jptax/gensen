import test from 'ava';
import tedori from '../../../lib/hoshu/calculator/tedori';

// https://www.nta.go.jp/taxanswer/gensen/2792_qa.htm
test('税率が10.21％の場合（手取額が897,900円以下の場合)', t => {
  t.deepEqual(tedori(100000), { shiharai: 111370, gensen: 11370 });
  t.deepEqual(tedori(897900), { shiharai: 1000000, gensen: 102100 });
});

test('二段階税率の適用がある場合（手取額が897,900円超の場合）', t => {
  t.deepEqual(tedori(897901), { shiharai: 1000001, gensen: 102100 });
});
