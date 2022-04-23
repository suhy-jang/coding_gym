function greatestCommonDivisor(a: number, b: number) {
  let remainder: number;
  do {
    remainder = a % b;
    a = b;
    b = remainder;
  } while (typeof remainder === 'number' && remainder > 0);
  return a;
}

export function leastCommonMultiple(a: number, b: number): number {
  const gcdVal = greatestCommonDivisor(a, b);
  const aDiff = a / gcdVal;
  const bDiff = b / gcdVal;
  return gcdVal * aDiff * bDiff;
}
