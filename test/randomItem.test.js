const randomElement = require('../helpers/randomElement');

test('get() uses provided random function', () => {
    const arr = ['one', 'two', 'three'];
    const item1 = randomElement.get(arr, () => 0.1);
    const item2 = randomElement.get(arr, () => 0.5);
    const item3 = randomElement.get(arr, () => 0.9);
    expect(item1).toBe('one');
    expect(item2).toBe('two');
    expect(item3).toBe('three');
});
