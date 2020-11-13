const { gameMap, Coordinate } = require('./model.js');

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
  // console.log('moves', moves);

  const checkPosition = (position, map) => {
    const lastRow = map.length - 1;
    if (lastRow < 0) throw new Error('invalid map');
    const lastColumn = map[0].length - 1;
    // TODO: add actual map validation (e.g. same column length, no invalid symbols))
    if (
      position.y < 0 ||
      position.y > lastRow ||
      position.x < 0 ||
      position.x > lastColumn
    )
      return 3;
    switch (map[position.y][position.x]) {
      case 'O':
        return 2;
      case 'D':
        return 1;
      default:
        return 0;
    }
  };

  let currentPosition = new Coordinate();

  const result = moves.reduce((acc, cur) => {
    if (acc > 0) return acc;
    currentPosition = new Coordinate(
      currentPosition.x + cur.x,
      currentPosition.y + cur.y,
    );
    // console.log(currentPosition);
    const newAcc = checkPosition(currentPosition, gameMap);
    return newAcc;
  }, 0);
  return result;
};

module.exports = checkSolution;
