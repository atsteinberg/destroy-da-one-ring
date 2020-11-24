const PropTypes = require('prop-types');
const { Coordinate, CoordinatePropType } = require('./Coordinate');

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

  duplicate() {
    return new TimeSlice(this.coordinate.duplicate(), this.result);
  }

  updatePosition(move) {
    const safeMove = { x: 0, y: 0, ...move };
    const newSlice = this.duplicate();
    if (newSlice.result === 0) {
      newSlice.coordinate.x += safeMove.x;
      newSlice.coordinate.y += safeMove.y;
    }
    return newSlice;
  }
}

const TimeSlicePropType = PropTypes.shape({
  coordinate: CoordinatePropType.isRequired,
  result: PropTypes.number.isRequired,
});

module.exports = {
  TimeSlice,
  TimeSlicePropType,
};
