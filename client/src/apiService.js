import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.SERVER_PORT || 3001;
const ADDRESS = process.env.SERVER_ADDRESS || 'https://localhost';
const PATH = process.env.POST_PATH || 'game';

const apiURL = `${ADDRESS}:${PORT}/${PATH}`;

const handleError = (err) => {
  console.error(err);
};

const postSolution = async (solution) => {
  const options = {
    header: {
      method: 'POST',
      contentType: 'application/json',
      body: {
        payload: solution,
      },
    },
  };
  let result;
  try {
    result = await fetch(apiURL, options);
  } catch (err) {
    handleError(err);
  }
  return result ? result.payload : undefined;
};

export default postSolution;
