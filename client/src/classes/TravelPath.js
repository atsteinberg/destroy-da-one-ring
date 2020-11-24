const PropTypes = require('prop-types');
const { TimeSlice, TimeSlicePropType } = require('./TimeSlice');

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

  static fromObj(obj) {
    return new TravelPath(obj.path || []);
  }
}

const TravelPathPropType = PropTypes.shape({
  path: PropTypes.arrayOf(TimeSlicePropType),
});

module.exports = {
  TravelPath,
  TravelPathPropType,
};
