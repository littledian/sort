import BaseSort from './BaseSort';

export default class SelectionSort extends BaseSort {
  async sort(array: number[]): Promise<number[]> {
    const length = array.length;
    for (let i = 0; i < length; i++) {
      let min = i;

      for (let j = i + 1; j < length; j++) {
        if (array[min] > array[j]) {
          min = j;
        }
      }

      this.exchange(array, i, min);
      await this.sleep(1);
    }

    return array;
  }
}
