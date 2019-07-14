// tslint:disable
export type PromiseFunction = (x: any) => Promise<any>;

export const pipe = (x: any, ...fns: Function[]) => fns.reduce((v, f) => f(v), x);
export const compose = (x: any, ...fns: Function[]) => fns.reduceRight((v, f) => f(v), x);
export const pPipe =  (...fns: PromiseFunction[]) => async (x: any) => fns.reduce(async (v, f) => f(await v), x);
export const pCompose = (...fns: PromiseFunction[]) => async (x: any) => fns.reduceRight(async (v, f) => f(await v), x);