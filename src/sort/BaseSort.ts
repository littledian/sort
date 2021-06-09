abstract class BaseSort {
  abstract sort(array: number[]): Promise<number[]>;

  protected async sleep(ms: number): Promise<void> {
    await new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  exchange(array: number[], p: number, q: number) {
    [array[p], array[q]] = [array[q], array[p]];
  }

  isSorted(array: number, asc = true) {
    if (!Array.isArray(array)) {
      return false;
    }

    for (let i = 1; i < array.length; i++) {
      if ((array[i] < array[i - 1] && asc) || (array[i] > array[i - 1] && !asc)) {
        return false;
      }
    }

    return true;
  }
}

export default BaseSort;
