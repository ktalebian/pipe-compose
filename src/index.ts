// tslint:disable

export const pipe = (x: any, ...fns: Function[]) => fns.reduce((v, f) => f(v), x);
export const compose = (x: any, ...fns: Function[]) => fns.reduceRight((v, f) => f(v), x);
