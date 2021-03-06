const should = require('chai').should();
const checkSolution = require('../gameLogic');
const {
  Coordinate,
  TimeSlice,
  TravelPath,
} = require('../../client/src/classes');
const mocks = require('./mocks');

describe('Coordinate', () => {
  it('should have coordinates as instances', () => {
    const newCoordinate = new Coordinate(0, 0);
    newCoordinate.should.be.instanceOf(Coordinate);
    newCoordinate.should.deep.equal({ x: 0, y: 0 });
  });
  it('should create the correct default coordinate', () => {
    const newCoordinate = new Coordinate();
    newCoordinate.should.deep.equal({ x: 0, y: 5 });
  });
  it('should have a working duplicate method', () => {
    const newCoordinate = new Coordinate();
    const duplicate = newCoordinate.duplicate();
    duplicate.should.not.equal(newCoordinate);
    duplicate.should.deep.equal(newCoordinate);
  });
});

describe('TimeSlice', () => {
  it('should have timeslices as instances', () => {
    const newTimeSlice = new TimeSlice(new Coordinate(0, 0), 0);
    newTimeSlice.should.be.instanceOf(TimeSlice);
    newTimeSlice.should.deep.equal(mocks.timeSlices.nullSlice);
  });

  it('should create the correct default slices', () => {
    const newTimeSlice = new TimeSlice();
    newTimeSlice.should.deep.equal(mocks.timeSlices.defaultSlice);
    const secondSlice = new TimeSlice(new Coordinate(3, 5));
    secondSlice.should.deep.equal(mocks.timeSlices.threeFiveSlice);
  });

  it('should have a working duplicate method', () => {
    const newTimeSlice = new TimeSlice();
    const duplicate = newTimeSlice.duplicate();
    duplicate.should.not.equal(newTimeSlice);
    duplicate.should.deep.equal(newTimeSlice);
  });

  it('should have a working updatePosition method', () => {
    const newTimeSlice = new TimeSlice();
    const updatedSlice = newTimeSlice.updatePosition(new Coordinate(3, 0));
    updatedSlice.should.deep.equal(mocks.timeSlices.threeFiveSlice);
    updatedSlice.should.not.equal(newTimeSlice);
    const secondUpdate = updatedSlice.updatePosition(new Coordinate(-3, 0));
    secondUpdate.should.deep.equal(newTimeSlice);
    const thirdUpdate = newTimeSlice.updatePosition(new Coordinate(0, -5));
    thirdUpdate.should.deep.equal(mocks.timeSlices.nullSlice);
  });

  it('should have an updatePosition method that does nothing when result is nonnull', () => {
    const newTimeSlice = new TimeSlice(new Coordinate(3, 4), 2);
    const failedUpdate = newTimeSlice.updatePosition(new Coordinate(1, 1));
    failedUpdate.should.deep.equal(newTimeSlice);
  });
});

describe('TravelPath', () => {
  it('should have travelpaths as instances', () => {
    const newPath = new TravelPath();
    newPath.should.be.instanceOf(TravelPath);
    newPath.should.deep.equal(mocks.travelPaths.defaultPath);
  });

  it('should add slices to path', () => {
    const newPath = new TravelPath();
    const slice = new TimeSlice();
    const expandedPath = newPath.add(slice);
    expandedPath.should.deep.equal(mocks.travelPaths.expandedPath);
  });

  it('should return the final result', () => {
    const newPath = new TravelPath([new TimeSlice(new Coordinate(3, 4), 2)]);
    newPath.finalResult.should.equal(2);
  });

  it('should create a TravelPath instance from an object', () => {
    const newPath = TravelPath.fromObj(mocks.travelPaths.defaultPath);
    newPath.should.deep.equal(new TravelPath());
  });
});

describe('checkSolution', () => {
  it('should yield some result', () => {
    should.exist(checkSolution(['n']));
  });

  it('should recognize when Frodo is off the map', () => {
    checkSolution(mocks.moves.northOffTheMap).finalResult.should.equal(3);
    checkSolution(mocks.moves.southOffTheMap).finalResult.should.equal(3);
    checkSolution(mocks.moves.westOffTheMap).finalResult.should.equal(3);
    checkSolution(mocks.moves.eastOffTheMap).finalResult.should.equal(3);
  });

  it('should recognize whether Frodo encountered an orc', () => {
    checkSolution(mocks.moves.orcEncounters[0]).finalResult.should.equal(2);
    checkSolution(mocks.moves.orcFreeTravel[0]).finalResult.should.equal(0);
    checkSolution(mocks.moves.orcEncounters[1]).finalResult.should.equal(2);
    checkSolution(mocks.moves.orcFreeTravel[1]).finalResult.should.equal(0);
    checkSolution(mocks.moves.orcEncounters[2]).finalResult.should.equal(2);
  });

  it('should recognize when Frodo found the ring', () => {
    checkSolution(mocks.moves.pathToRing).finalResult.should.equal(1);
  });

  it('should truncate travel path', () => {
    checkSolution(mocks.moves.deepWest).path.length.should.equal(2);
  });
});
