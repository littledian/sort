import { generateRandomArray } from './random';
import proxy from './proxy';
import BaseSort from '../sort/BaseSort';

function init(array: number[], el: HTMLElement) {
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

function addUpdateHook(array: number[], el: HTMLElement) {
  return proxy(array, (oldVal, newVal) => {
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
    const children = el.children;
    const length = oldVal.length;
    for (const diff of diffs) {
      (children[diff.index] as HTMLDivElement).style.height = `${(diff.newVal * 100) / length}%`;
    }
  });
}

export default function sort(el: HTMLElement, instance: BaseSort) {
  let array = generateRandomArray(1000);
  init(array, el);
  array = addUpdateHook(array, el);
  instance.sort(array);
}
