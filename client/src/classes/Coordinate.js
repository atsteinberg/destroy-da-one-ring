const PropTypes = require('prop-types');

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

  duplicate() {
    return new Coordinate(this.x, this.y);
  }
}

const CoordinatePropType = PropTypes.objectOf({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
});

module.exports = {
  Coordinate,
  CoordinatePropType,
};
