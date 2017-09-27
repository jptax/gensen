import test from 'ava';
import standard from '../../../lib/hoshu/calculator/standard';

test((t) => {
	t.deepEqual(standard(100), { gensen: 100, shiharai: 2000 });
});
