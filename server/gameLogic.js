const gameMap = require('./model.js');
const { Coordinate, TimeSlice, TravelPath } = require('../client/src/classes');

const checkPosition = (coordinate, map) => {
  const lastRow = map.length - 1;
  if (lastRow < 0) throw new Error('invalid map');
  const lastColumn = map[0].length - 1;
  // TODO: add actual map validation (e.g. same column length, no invalid symbols))
  if (
    coordinate.y < 0 ||
    coordinate.y > lastRow ||
    coordinate.x < 0 ||
    coordinate.x > lastColumn
  )
    return 3;
  switch (map[coordinate.y][coordinate.x]) {
    case 'O':
      return 2;
    case 'D':
      return 1;
    default:
      return 0;
  }
};

const checkSolution = (solution) => {
  const moves = solution.map((item) => {
    switch (item) {
      case 'n':
        return new Coordinate(0, -1);
      case 'e':
        return new Coordinate(1, 0);
      case 's':
        return new Coordinate(0, 1);
      case 'w':
        return new Coordinate(-1, 0);
      default:
        return new Coordinate(0, 0);
    }
  });

  let currentPoint = new TimeSlice();

  const travelHistory = moves.map((move) => {
    let nextPoint;
    if (currentPoint.result === 0) {
      nextPoint = currentPoint.updatePosition(move);
      nextPoint.result = checkPosition(nextPoint.coordinate, gameMap);
      currentPoint = nextPoint;
    } else {
      nextPoint = currentPoint.duplicate();
      nextPoint.result = null;
    }
    return nextPoint;
  });
  return new TravelPath([
    new TimeSlice(),
    ...travelHistory.filter((point) => point.result !== null),
  ]);
};

module.exports = checkSolution;
