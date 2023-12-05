import { ERROR_MESSAGE, PATTERN, UNIT } from '../constants/constants.js';
import CustomError from './CustomError.js';

const Validator = {
  /**
   *
   * @param {string} input
   */
  checkCash(input) {
    this.emptyInput(input);
    if (!/\d+/g.test(input)) throw new Error(ERROR_MESSAGE.onlyNumber);

    if (Number(input) < UNIT) {
      throw new CustomError(ERROR_MESSAGE.minimum);
    }

    if (Number(input) % UNIT) {
      throw new CustomError(ERROR_MESSAGE.invalidUnit);
    }
  },

  /**
   *
   * @param {string} input
   */
  checkLotto(input) {
    this.emptyInput(input);

    if (!PATTERN.numberWithComma.test(input))
      throw new CustomError(ERROR_MESSAGE.onlyNumberAndComma);

    const lotto = input.split(',').map(Number);
    this.checkAsArray(lotto);
  },

  /**
   *
   * @param {number[]} array
   */
  checkAsArray(array) {
    array.forEach(num => {
      if (num < 1 || num > 45) {
        throw new CustomError(ERROR_MESSAGE.invalidRange);
      }
    });
  },

  /**
   *
   * @param {string} input
   */
  emptyInput(input) {
    if (!input) throw new CustomError(ERROR_MESSAGE.noInput);
  },
};

export default Validator;
