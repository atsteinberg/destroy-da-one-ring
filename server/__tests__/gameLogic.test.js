const should = require('chai').should();
const checkSolution = require('../gameLogic');
const mocks = require('./gameLogic.mocks');

describe('checkSolution', () => {
  it('should yield some result', () => {
    should.exist(checkSolution(['n']));
  });

  it('should recognize when Frodo is off the map', () => {
    checkSolution(mocks.moves.northOffTheMap).should.equal(3);
    checkSolution(mocks.moves.southOffTheMap).should.equal(3);
    checkSolution(mocks.moves.westOffTheMap).should.equal(3);
    checkSolution(mocks.moves.eastOffTheMap).should.equal(3);
  });

  it('should recognize whether Frodo encountered an orc', () => {
    checkSolution(mocks.moves.orcEncounters[0]).should.equal(2);
    checkSolution(mocks.moves.orcFreeTravel[0]).should.equal(0);
    checkSolution(mocks.moves.orcEncounters[1]).should.equal(2);
    checkSolution(mocks.moves.orcFreeTravel[1]).should.equal(0);
    checkSolution(mocks.moves.orcEncounters[2]).should.equal(2);
  });

  it('should recognize when Frodo found the ring', () => {
    checkSolution(mocks.moves.pathToRing).should.equal(1);
  });
});
