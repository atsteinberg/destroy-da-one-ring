const Coordinate = require('./Coordinate');

class TimeSlice {
  constructor(coordinate, result) {
    if (arguments.length >= 2) {
      this.coordinate = coordinate;
      this.result = result;
    } else if (arguments.length === 1) {
      this.coordinate = coordinate;
      this.result = 0;
    } else {
      this.coordinate = new Coordinate();
      this.result = 0;
    }
  }
}

module.exports = TimeSlice;
