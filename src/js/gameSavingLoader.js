import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  load() {
    return read().then((resolve) => {
      return json(resolve);
    }).then((data) => {
      return data;
    }).catch((error) => {
      return error;
    })
  }
}
