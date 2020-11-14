const eastOffTheMap = Array(12).fill('e');
eastOffTheMap[0] = 'n';
eastOffTheMap[5] = 'n';
const mocks = {
  moves: {
    northOffTheMap: ['n', 'n', 'n', 'n', 'n', 'n'],
    southOffTheMap: ['s', 's', 's', 's', 's', 's'],
    eastOffTheMap,
    westOffTheMap: ['n', 'w'],
    orcEncounters: [
      ['n', 'n', 'e'],
      ['s', 'e', 'e', 'e', 'n'],
      ['e', 'e', 'n', 'n', 'w'],
    ],
    orcFreeTravel: [
      ['n', 'e', 'e', 'e'],
      ['n', 'e', 's', 'w'],
    ],
    pathToRing: [
      'n',
      'n',
      'n',
      'n',
      'n',
      'e',
      'e',
      's',
      'e',
      'e',
      'n',
      'e',
      'e',
      'e',
      's',
    ],
  },
  timeSlices: {
    nullSlice: {
      coordinate: {
        x: 0,
        y: 0,
      },
      result: 0,
    },
    defaultSlice: {
      coordinate: {
        x: 0,
        y: 5,
      },
      result: 0,
    },
    threeFiveSlice: {
      coordinate: {
        x: 3,
        y: 5,
      },
      result: 0,
    },
  },
};

module.exports = mocks;
