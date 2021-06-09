import BaseSort from './BaseSort';

export default class QuickSort extends BaseSort {
  private async _partition(array: number[], lo: number, hi: number) {
    let i = lo;
    let j = hi + 1;
    let v = array[lo];

    while (true) {
      while (array[++i] < v) {}

      while (array[--j] > v) {}

      if (i >= j) break;

      this.exchange(array, i, j);
      await this.sleep(1);
    }
    this.exchange(array, j, lo);
    await this.sleep(1);

    return j;
  }

  private async _sort(array: number[], lo: number, hi: number) {
    if (hi <= lo) return;
    const j = await this._partition(array, lo, hi);
    await this._sort(array, lo, j - 1);
    await this._sort(array, j + 1, hi);
  }

  async sort(array: number[]): Promise<number[]> {
    await this._sort(array, 0, array.length - 1);
    return array;
  }
}
