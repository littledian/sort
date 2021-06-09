export function getRandomNumber(min: number, max: number): number {
  return min + Math.floor((max - min) * Math.random());
}

export function generateRandomArray(length: number): number[] {
  const array = new Array(length).fill(0).map((_, index) => index);
  const result = [];
  for (let i = 0; i < length; i++) {
    const index = getRandomNumber(0, length - i);
    result.push(array.splice(index, 1)[0]);
  }
  return result;
}
