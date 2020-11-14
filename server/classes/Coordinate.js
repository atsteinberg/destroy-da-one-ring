class Coordinate {
  constructor(x, y) {
    if (arguments.length === 2) {
      this.x = x;
      this.y = y;
    } else {
      this.x = 0;
      this.y = 5;
    }
  }
}

module.exports = Coordinate;
