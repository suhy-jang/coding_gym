//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(lines) {
    this.lines = lines;
  }

  get rows() {
    return this._rows();
  }

  get columns() {
    return this._columns();
  }

  get saddlePoints() {
    this._linesToMatrix();
    let collections = [];
    for(let r = 0; r < this.matrix.length; r++) {
      for(let c = 0; c < this.matrix[0].length; c++) {
        if(this._checkSaddle(this.matrix[r][c], r, c)) {
          collections.push([r, c]);
        }
      }
    }
    return collections;
  }

  _rows() {
    this._linesToMatrix();
    return this.matrix;
  }

  _columns() {
    this._linesToMatrix();
    return this._rotateMatrix(this.matrix);
  }

  _checkSaddle(value, row, col) {
    let first = this._rows()[row].every((r) => value >= r);
    let second = this._columns()[col].every((c) => value <= c);
    return first & second;
  }

  _linesToMatrix() {
    this.matrix = this.matrix || this.lines.split('\n').map((line) =>
      line.replace(/^\s+|\s+$/, '').split(/\s/).map((c) => parseInt(c)));
  }

  _rotateMatrix(matrix) {
    let newMatrix = [];
    for(let c = 0; c < matrix[0].length; c++) {
      let columns = [];
      for(let r = 0; r < matrix.length; r++) {
        columns.push(matrix[r][c]);
      }
      newMatrix.push(columns);
    }
    return newMatrix;
  }
}
