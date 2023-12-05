import Validator from '../utils/Validator.js';

class Cash {
  #cash;

  /**
   *
   * @param {string} input
   */
  constructor(input) {
    this.#validate(input);
    this.#cash = Number(input);
  }

  /**
   *
   * @param {string} input
   */
  #validate(input) {
    Validator.isMoneyValid(String(input));
  }

  /**
   *
   * @returns {number}
   */
  returnCash() {
    return Number(this.#cash);
  }
}

export default Cash;
