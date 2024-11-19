import { classNames } from './classNames';

describe('classNames', () => {
    test('test', () => {
        expect(true).toBe(true);
    });
});

describe('classNames', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with mods true', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected);
    });

    test('with additional false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected);
    });

    test('with additional undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expected);
    });
});
