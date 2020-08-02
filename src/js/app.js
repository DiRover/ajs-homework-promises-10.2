/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader.js';

const app = new GameSavingLoader();

(async () => {
  try {
    const GameSaving = await app.load();
    console.log(GameSaving);
  } catch (err) {
    return err;
  }
})();

export default app;
