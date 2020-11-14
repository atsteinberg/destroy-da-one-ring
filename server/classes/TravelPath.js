const TimeSlice = require('./TimeSlice');

class TravelPath {
  constructor(path) {
    if (arguments.length === 0) {
      this.path = [];
    } else {
      this.path = [...path];
    }
  }

  add(slice) {
    if (slice instanceof TimeSlice) {
      return { ...this, path: [...this.path, slice] };
    }
    return { ...this };
  }

  get finalResult() {
    if (this.path.length === 0) {
      return new Error('travel path is empty');
    }
    return this.path[this.path.length - 1].result;
  }
}

module.exports = TravelPath;
