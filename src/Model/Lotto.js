import Validator from '../utils/Validator.js';

class Lotto {
  #numbers;

  /**
   *
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   *
   * @param {number[]} numbers
   */
  #validate(numbers) {
    Validator.isNumbersValid(numbers);
  }

  /**
   *
   * @returns {number[]}
   */
  returnLotto() {
    return this.#numbers;
  }
}

export default Lotto;
