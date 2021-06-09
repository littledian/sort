export default function proxy(
  array: number[],
  onSet: (oldVal: number[], newVal: number[]) => void
): number[] {
  return new Proxy(array, {
    get(target: number[], p: string | symbol, receiver: any): any {
      return target[p];
    },
    set(target: number[], p: string | symbol, value: any, receiver: any): boolean {
      const oldVal = [...target];
      target[p] = value;
      onSet(oldVal, target);
      return true;
    }
  });
}
