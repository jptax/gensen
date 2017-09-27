import test from 'ava';
import gensen from '../lib/index';

test((t) => {
	t.deepEqual(gensen.hoshu(100), { gensen: 100, shiharai: 2000 });
});
