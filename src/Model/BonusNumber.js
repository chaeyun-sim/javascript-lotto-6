import Validator from '../utils/Validator.js';

class BonusNumber {
  #bonus;
  /**
   *
   * @param {string} input
   */
  constructor(input) {
    this.#validate(input);
    this.#bonus = Number(input);
  }

  /**
   *
   * @param {string} input
   */
  #validate(input) {
    Validator.emptyInput(input);
    Validator.checkNumber(Number(input));
    Validator.checkRange(Number(input));
  }

  /**
   *
   * @returns {number}
   */
  returnBonus() {
    return this.#bonus;
  }
}

export default BonusNumber;
