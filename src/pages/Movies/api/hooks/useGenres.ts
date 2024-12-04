export const useGenres = ({ array, num }: { array: number[]; num: number }) => {
  if (array.findIndex((g) => g === num) === -1) {
    return [...array, num];
  } else {
    return array.filter((g) => g !== num);
  }
};
