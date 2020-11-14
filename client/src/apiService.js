import dotenv from 'dotenv';
import { TravelPath } from './classes';

dotenv.config();

const PORT = process.env.SERVER_PORT || 3001;
const ADDRESS = process.env.SERVER_ADDRESS || 'http://localhost';
const PATH = process.env.POST_PATH || 'game';

const apiURL = `${ADDRESS}:${PORT}/${PATH}`;

const handleError = (err) => {
  // TODO implement error handler
  // eslint-disable-next-line no-console
  console.error(err);
};

const postSolution = (solution) => {
  const body = JSON.stringify({
    payload: solution,
  });
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  };
  return fetch(apiURL, options)
    .then((res) => {
      if (!res) throw new Error('no response from the server');
      if (res.ok && res.status === 200) return res.json();
      throw new Error('bad response from the server');
    })
    .then((res) => TravelPath.fromObj(res.payload))
    .catch((err) => handleError(err));
};

export default postSolution;
