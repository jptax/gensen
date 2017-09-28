import test from 'ava';
import tedori from '../../../lib/hoshu/calculator/tedori';

// https://www.nta.go.jp/taxanswer/gensen/2792_qa.htm
test('税率が10.21％の場合（手取額が897,900円以下の場合)', t => {
  t.deepEqual(tedori(100000), { zei: 11370, zeikomi: 111370, zeinuki: 100000 });
  t.deepEqual(tedori(897900), { zei: 102100, zeikomi: 1000000, zeinuki: 897900 });
});

test('二段階税率の適用がある場合（手取額が897,900円超の場合）', t => {
  t.deepEqual(tedori(897901), { zei: 102100, zeikomi: 1000001, zeinuki: 897901 });
});
