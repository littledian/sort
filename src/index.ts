import { generateRandomArray } from './utils/random';
import proxy from './utils/proxy';
import SelectionSort from './sort/SelectSort';
import QuickSort from './sort/QuickSort';

function initElement(array: number[], el: HTMLElement) {
  el.innerHTML = '';
  const length = array.length;
  let s = '';
  for (let i = 0; i < length; i++) {
    s += `<div class="item" style="left: ${(i * 100) / length}%; height: ${
      (array[i] * 100) / length
    }%"></div>`;
  }
  el.innerHTML = s;
}

let array = generateRandomArray(1000);
array = proxy(array, (oldVal, newVal) => {
  const diffs = [];
  for (let i = 0; i < oldVal.length; i++) {
    if (oldVal[i] !== newVal[i]) {
      diffs.push({
        index: i,
        oldVal: oldVal[i],
        newVal: newVal[i]
      });
    }
  }
  const el = document.getElementById('root');
  const children = el.children;
  const length = oldVal.length;
  for (const diff of diffs) {
    (children[diff.index] as HTMLDivElement).style.height = `${(diff.newVal * 100) / length}%`;
  }
});

initElement(array, document.getElementById('root'));
// const instance = new SelectionSort();
const instance = new QuickSort();
instance.sort(array);
