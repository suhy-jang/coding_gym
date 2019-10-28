//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const cw = {
  'north': 'east',
  'east': 'south',
  'south': 'west',
  'west': 'north',
};

const ccw = {
  'north': 'west',
  'west': 'south',
  'south': 'east',
  'east': 'north',
};

export class InvalidInputError extends Error {
  constructor() {
    super();
  }
}

export class Robot {
  orient(direction) {
    if (!['east', 'west', 'north', 'south'].includes(direction)) {
      throw new InvalidInputError('Invalid direction');
    }
    this._bearing = direction;
  }

  get bearing() {
    return this._bearing;
  }

  get coordinates() {
    return this._coordinates;
  }

  turnRight() {
    this._bearing = cw[this._bearing];
  }

  turnLeft() {
    this._bearing = ccw[this._bearing];
  }

  at(x, y) {
    this._coordinates = [x, y];
  }

  advance() {
    let dx = 0;
    let dy = 0;
    switch (this._bearing) {
      case 'north':
        dy = 1;
        break;
      case 'west':
        dx = -1;
        break;
      case 'south':
        dy = -1;
        break;
      case 'east':
        dx = 1;
        break;
      default:
    }
    this._coordinates = [this._coordinates[0] + dx, this._coordinates[1] + dy];
  }

  static instructions(words) {
    let instructionList = words.split('').map( word => {
      if (word == 'L') {
        return 'turnLeft';
      } else if (word == 'R') {
        return 'turnRight';
      } else if (word == 'A') {
        return 'advance';
      }
    });
    return instructionList;
  }

  place({ x, y, direction }) {
    this.at(x, y);
    this.orient(direction);
  }

  evaluate(directions) {
    Robot.instructions(directions).forEach(instruction => {
      if(instruction == 'turnLeft') {
        this.turnLeft();
      } else if (instruction == 'turnRight') {
        this.turnRight();
      } else if (instruction == 'advance') {
        this.advance();
      }
    });
  }
}
