import { ERROR_MESSAGE, PATTERN, UNIT } from '../constants/constants.js';
import CustomError from './CustomError.js';

const Validator = {
  /**
   *
   * @param {string} input
   */
  checkCash(input) {
    this.emptyInput(input);
    this.checkNumber(input);

    if (Number(input) < UNIT) {
      throw new CustomError(ERROR_MESSAGE.minimum);
    }

    if (Number(input) % UNIT) {
      throw new CustomError(ERROR_MESSAGE.invalidUnit);
    }
  },

  /**
   *
   * @param {number[]} numbers
   */
  checkLotto(numbers) {
    numbers.forEach(num => {
      this.checkNumber(num);

      if (num < 1 || num > 45) {
        throw new CustomError(ERROR_MESSAGE.invalidRange);
      }
    });
  },

  /**
   *
   * @param {string} input
   */
  checkNumber(input) {
    if (!/\d+/g.test(input)) throw new Error(ERROR_MESSAGE.onlyNumber);
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
