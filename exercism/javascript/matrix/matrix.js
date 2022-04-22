//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.string = string;
  }

  // auto cashing
  get rows() {
    return this._calcRows();
  }

  get columns() {
    return this._calcColumns();
  }

  _calcRows() {
    return this.string.split('\n').map((line) => line.split(/\s/).map((c) => parseInt(c)));
  }

  _calcColumns() {
    return this._transPos(this._calcRows());
  }

  _transPos(matrix) {
    let newMatrix = [];
    for(let j=0; j < matrix[0].length; j += 1) {
      let column = [];
      for(let i=0; i < matrix.length; i += 1) {
        column.push(matrix[i][j]);
      }
      newMatrix.push(column);
    }
    return newMatrix;
  }
}
