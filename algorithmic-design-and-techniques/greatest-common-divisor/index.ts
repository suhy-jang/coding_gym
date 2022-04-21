export default function gcd(a: number, b: number) {
  let remainder: number;
  do {
    remainder = a % b;
    a = b;
    b = remainder;
  } while (typeof remainder === 'number' && remainder > 0);
  return a;
}
