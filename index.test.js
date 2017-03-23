import test from 'ava';
import { balance } from './index';

test('Should return false', t => {
	const string = '[{)]';

	t.false(balance(string));
});

test('Should return false', t => {
	const string = '[]{()';

	t.false(balance(string));
});

test('Should return true', t => {
	const string = '(){}[]';

	t.true(balance(string));
});

test('Should return true', t => {
	const string = '[{()}](){}';

	t.true(balance(string));
});
