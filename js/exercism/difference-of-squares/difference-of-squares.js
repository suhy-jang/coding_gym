//
// This is only a SKELETON file for the 'Difference of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(lastNum) {
    this.lastNum = lastNum;
  }

  get sumOfSquares() {
    return this._sumOfSquares();
  }

  get squareOfSum() {
    return this._squareOfSum();
  }

  get difference() {
    return this._squareOfSum() - this._sumOfSquares();
  }

  _sumOfSquares() {
    let squares = this._squares(this._numArray());
    return this._sum(squares);
  }

  _squareOfSum() {
    let sum = this._sum(this._numArray());
    return sum * sum;
  }

  _squares(arr) {
    return arr.map((e) => e * e);
  }

  _sum(arr) {
    return arr.reduce((acc, num) => acc + num);
  }

  _numArray() {
    return [...Array(this.lastNum).keys()].map((e) => e + 1);
  }
}
