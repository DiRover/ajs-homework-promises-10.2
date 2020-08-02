/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  load() {
    return new Promise((resolve) => {
      resolve(read());
    }).then((data) => json(data)).then((str) => {
      const GameSaving = JSON.parse(str);
      return GameSaving;
    });
  }
}
