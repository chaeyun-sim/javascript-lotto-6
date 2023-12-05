import {
  ERROR_MESSAGE,
  TOTAL_LOTTO_NUMBERS,
  UNIT,
} from '../constants/constants.js';
import CustomError from './CustomError.js';

const Validator = {
  /**
   *
   * @param {string} str
   */
  isMoneyValid(str) {
    Check.emptyInput(str);
    Check.checkNumber(str);
    Check.checkUnit(str);
  },

  /**
   *
   * @param {numbers[]} numbers
   */
  isNumbersValid(numbers) {
    Check.emptyInput(numbers);
    Check.checkLength(numbers);
    Check.checkDuplicate(numbers);
    Check.checkAsArray(numbers);
  },

  /**
   *
   * @param {string} bonusNumber
   * @param {number[]} winningNumbers
   */
  isBonusNumberValid(winningNumbers, bonusNumber) {
    Check.checkNumber(bonusNumber);
    Check.checkRange(Number(bonusNumber));

    if (winningNumbers.includes(bonusNumber)) {
      throw new CustomError(
        '[ERROR] 보너스 번호가 당첨 번호에 포함되어있습니다.'
      );
    }
  },
};

const Check = {
  /**
   *
   * @param {string} input
   */
  emptyInput(input) {
    if (!input) {
      throw new CustomError(ERROR_MESSAGE.noInput);
    }
  },

  /**
   *
   * @param {string} str
   */
  checkUnit(str) {
    if (Number(str) < UNIT) {
      throw new CustomError(ERROR_MESSAGE.minimum);
    }

    if (Number(str) % UNIT > 0) {
      throw new CustomError(ERROR_MESSAGE.invalidUnit);
    }
  },

  /**
   *
   * @param {string} str
   */
  checkNumber(str) {
    if (isNaN(str)) {
      throw new CustomError(ERROR_MESSAGE.onlyNumber);
    }
  },

  /**
   *
   * @param {number[]} numbers
   */
  checkLength(numbers) {
    if (
      numbers.length > TOTAL_LOTTO_NUMBERS ||
      numbers.length < TOTAL_LOTTO_NUMBERS
    ) {
      throw new CustomError(ERROR_MESSAGE.invalidLength);
    }
  },

  /**
   *
   * @param {number[]} numbers
   */
  checkAsArray(numbers) {
    numbers.forEach(num => {
      this.checkRange(num);
      this.checkNumber(num);
    });
  },

  /**
   *
   * @param {number[]} numbers
   */
  checkDuplicate(numbers) {
    const origin = numbers.sort((a, b) => a - b).join('');
    const removed = [...new Set(numbers)].sort((a, b) => a - b).join('');

    if (origin !== removed) {
      throw new CustomError(ERROR_MESSAGE.duplicated);
    }
  },

  /**
   *
   * @param {number} number
   */
  checkRange(number) {
    if (number < 1 || number > 45) {
      throw new CustomError(ERROR_MESSAGE.invalidRange);
    }
  },
};

export default Validator;
