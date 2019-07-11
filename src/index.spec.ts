import { pipe, compose } from './index';

describe('index', () => {
    const uppercase = (str: string) => str.toUpperCase();
    const reverse = (str: string) => str.split('').reverse().join('');
    const get3Chars = (str: string) => str.substring(0, 3);

    describe('pipe', () => {
        it('should return result without any functions', () => {
            expect(pipe('sample-argument')).toEqual('sample-argument');
        });

        it('should pipe', () => {
            expect(pipe('sample-argument', uppercase, get3Chars, reverse)).toEqual('MAS');
            expect(pipe('sample-argument', uppercase, reverse, get3Chars)).toEqual('TNE');
        });
    });

    describe('compose', () => {
        it('should return result without any functions', () => {
            expect(compose('sample-argument')).toEqual('sample-argument');
        });

        it('should compose', () => {
            expect(compose('sample-argument', uppercase, get3Chars, reverse)).toEqual('TNE');
            expect(compose('sample-argument', uppercase, reverse, get3Chars)).toEqual('MAS');
        });
    });
});
