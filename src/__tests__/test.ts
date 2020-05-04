import { Special } from '../index';

test('bind', () => {
	let sp = new Special<number>(1);
	expect(sp.value).toBe(1);

	expect(sp.bind(5, () => sp.value)).toBe(5);

	expect(sp.value).toBe(1);
});