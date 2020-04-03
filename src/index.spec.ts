import { cCompose, compose, cPipe, pCompose, pipe, pPipe } from '.';

describe('index', () => {
  const uppercase = (str: string) => str.toUpperCase();
  const reverse = (str: string) => str.split('').reverse().join('');
  const get3Chars = (str: string) => str.substring(0, 3);

  const add1 = async (current: number) => current + 1;
  const divide3 = async (current: number) => current / 3;
  const multiply2 = async (current: number) => current * 2;

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

  describe('cPipe', () => {
    it('should return result without any functions', () => {
      expect(cPipe()('sample-argument')).toEqual('sample-argument');
    });

    it('should pipe', () => {
      expect(cPipe(uppercase, get3Chars, reverse)('sample-argument')).toEqual('MAS');
      expect(cPipe(uppercase, reverse, get3Chars)('sample-argument')).toEqual('TNE');
    });
  });

  describe('cCompose', () => {
    it('should return result without any functions', () => {
      expect(cCompose()('sample-argument')).toEqual('sample-argument');
    });

    it('should compose', () => {
      expect(cCompose(uppercase, get3Chars, reverse)('sample-argument')).toEqual('TNE');
      expect(cCompose(uppercase, reverse, get3Chars)('sample-argument')).toEqual('MAS');
    });
  });

  describe('pPipe', () => {
    it('should return value if no functions', async () => {
      expect(await pPipe()(1)).toEqual(1);
    });

    it('should pipe promises', async () => {
      expect(await pPipe(add1, multiply2, divide3)(2)).toEqual(2);
    });
  });

  describe('pCompose', () => {
    it('should return value if no functions', async () => {
      expect(await pCompose()(1)).toEqual(1);
    });

    it('should pipe promises', async () => {
      expect(await pCompose(add1, multiply2, divide3)(6)).toEqual(5);
    });
  });

  it('pipe and compose', () => {
    expect(compose('sample-argument', uppercase, get3Chars, reverse)).toEqual(
      pipe('sample-argument', reverse, get3Chars, uppercase),
    );
  });
});
