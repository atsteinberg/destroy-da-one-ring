const checkSolution = require('./gameLogic');

const isValid = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return false;
  const filtererdArr = arr.filter(
    (item) => item === 'n' || item === 'e' || item === 's' || item === 'w',
  );
  return arr.length === filtererdArr.length;
};

const description = `0 - nothing found\n1 - ring is destroyed,\n2 - orc found, Frodo dead\n3 - off the map`;

const postOne = (ctx) => {
  const { payload } = ctx.request.body;
  if (payload) {
    if (!isValid(payload)) {
      ctx.status = 400;
    } else {
      ctx.status = 200;
      try {
        const result = checkSolution(payload);
        ctx.body = {
          payload: result,
          description,
        };
      } catch (err) {
        ctx.status = 500;
      }
    }
  }
};

module.exports = {
  postOne,
};
