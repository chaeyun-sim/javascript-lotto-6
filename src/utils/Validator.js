import { ERROR_MESSAGE, UNIT } from '../constants/constants.js';
import CustomError from './CustomError.js';

const Validator = {
  /**
   *
   * @param {string} input
   */
  checkCash(input) {
    this.emptyInput(input);
    this.checkNumber(input);
    this.checkUnit(Number(input));
  },

  /**
   *
   * @param {number} num
   */
  checkUnit(num) {
    if (num < UNIT) {
      throw new CustomError(ERROR_MESSAGE.minimum);
    }

    if (num % UNIT) {
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
      this.checkRange(num);
    });
  },

  /**
   *
   * @param {string} input
   */
  checkNumber(input) {
    if (isNaN(input)) throw new Error(ERROR_MESSAGE.onlyNumber);
  },

  /**
   *
   * @param {number} num
   */
  checkRange(num) {
    if (num < 1 || num > 45) {
      throw new CustomError(ERROR_MESSAGE.invalidRange);
    }
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
