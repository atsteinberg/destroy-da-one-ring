const postSolution = (solution) => {
  const result = new Promise((res) => {
    setTimeout(() => res(solution), 1000);
  });
  return result;
};
export default postSolution;
