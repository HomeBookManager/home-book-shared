// @home-book
import { CHARACTERS } from 'home-book-constants';

export const getRandomKey = (keys?: Array<string>): string => {
  const result: Array<string> = [];

  do {
    result.splice(0, result.length);

    for (let i = 0; i < 9; i++) {
      result.push(
        CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length)),
      );
    }
  } while (keys ? keys.find((key) => key === result.join('')) : false);

  return result.join('');
};
