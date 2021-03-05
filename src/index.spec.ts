import { cCompose, compose, cPipe, pCompose, pipe, pPipe } from '.';

describe('index', () => {
  const sampleArgument = 'sample-argument';
  const uppercase = (str: string) => str.toUpperCase();
  const reverse = (str: string) => str.split('').reverse().join('');
  const get3Chars = (str: string) => str.substring(0, 3);

  const add1 = async (current: number) => current + 1;
  const divide3 = async (current: number) => current / 3;
  const multiply2 = async (current: number) => current * 2;

  describe('pipe', () => {
    it('pipe should return result without any functions', () => {
      expect(pipe(sampleArgument)).toEqual(sampleArgument);
    });

    it('should pipe', () => {
      expect(pipe(sampleArgument, uppercase, get3Chars, reverse)).toEqual('MAS');
      expect(pipe(sampleArgument, uppercase, reverse, get3Chars)).toEqual('TNE');
    });
  });

  describe('compose', () => {
    it('compose should return result without any functions', () => {
      expect(compose(sampleArgument)).toEqual(sampleArgument);
    });

    it('should compose', () => {
      expect(compose(sampleArgument, uppercase, get3Chars, reverse)).toEqual('TNE');
      expect(compose(sampleArgument, uppercase, reverse, get3Chars)).toEqual('MAS');
    });
  });

  describe('cPipe', () => {
    it('cPipe should return result without any functions', () => {
      expect(cPipe()(sampleArgument)).toEqual(sampleArgument);
    });

    it('should pipe', () => {
      expect(cPipe(uppercase, get3Chars, reverse)(sampleArgument)).toEqual('MAS');
      expect(cPipe(uppercase, reverse, get3Chars)(sampleArgument)).toEqual('TNE');
    });
  });

  describe('cCompose', () => {
    it('cCompose should return result without any functions', () => {
      expect(cCompose()(sampleArgument)).toEqual(sampleArgument);
    });

    it('should compose', () => {
      expect(cCompose(uppercase, get3Chars, reverse)(sampleArgument)).toEqual('TNE');
      expect(cCompose(uppercase, reverse, get3Chars)(sampleArgument)).toEqual('MAS');
    });
  });

  describe('pPipe', () => {
    it('pPipe should return value if no functions', async () => {
      expect(await pPipe()(1)).toEqual(1);
    });

    it('should pipe promises', async () => {
      expect(await pPipe(add1, multiply2, divide3)(2)).toEqual(2);
    });
  });

  describe('pCompose', () => {
    it('pCompose should return value if no functions', async () => {
      expect(await pCompose()(1)).toEqual(1);
    });

    it('should pipe promises', async () => {
      expect(await pCompose(add1, multiply2, divide3)(6)).toEqual(5);
    });
  });

  it('pipe and compose', () => {
    expect(compose(sampleArgument, uppercase, get3Chars, reverse)).toEqual(
      pipe(sampleArgument, reverse, get3Chars, uppercase),
    );
  });
});
