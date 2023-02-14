import GameSavingLoader from './gameSavingLoader';
import load from './gameAsync';

const game = new GameSavingLoader();
game.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.log(error);
});

load();