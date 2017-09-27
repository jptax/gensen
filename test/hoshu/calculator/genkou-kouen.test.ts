// https://www.nta.go.jp/taxanswer/gensen/2795.htm

import test from 'ava';
import gensen from '../../../lib/index';

test('50,000以下の場合', t => {
	t.deepEqual(gensen.hoshu.genkouKouen(100), { gensen: 0, shiharai: 100 });
	t.deepEqual(gensen.hoshu.genkouKouen(10000), { gensen: 0, shiharai: 10000 });
	t.deepEqual(gensen.hoshu.genkouKouen(50000), { gensen: 0, shiharai: 50000 });
});

test('50,000を超え、1,000,000以下の場合', t => {
	t.deepEqual(gensen.hoshu.genkouKouen(50001), { gensen: 5105, shiharai: 44896 });
	t.deepEqual(gensen.hoshu.genkouKouen(100000), { gensen: 10210, shiharai: 89790 });
	t.deepEqual(gensen.hoshu.genkouKouen(1000000), { gensen: 102100, shiharai: 897900 });
});

test('1,000,000を超える場合', t => {
	t.deepEqual(gensen.hoshu.genkouKouen(1000001), { gensen: 102100, shiharai: 897901 });
	t.deepEqual(gensen.hoshu.genkouKouen(1100000), { gensen: 122520, shiharai: 977480 });
	t.deepEqual(gensen.hoshu.genkouKouen(1500000), { gensen: 204200, shiharai: 1295800 });
});
