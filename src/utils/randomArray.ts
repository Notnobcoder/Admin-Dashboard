export const RandomArrayGenerator = (
  arrayLength: number,
  initial: number,
): number[] => {
  let newArray: number[] = [];
  for (var i = initial || 0; i < arrayLength; i++) {
    newArray.push(i);
  }
  return newArray;
};
