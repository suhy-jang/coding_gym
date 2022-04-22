//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (n) => {
  if (n <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }
  let sumOfAliquots = 0
  let aliquots = [...Array(Math.ceil((n + 1) / 2)).keys()].filter((e) => n % e == 0);
  if (aliquots.length > 0) {
    sumOfAliquots = aliquots.reduce((acc, num) => acc + num);
  }
  if (sumOfAliquots < n) {
    return 'deficient';
  } else if (sumOfAliquots > n) {
    return 'abundant';
  }
  return 'perfect';
};
