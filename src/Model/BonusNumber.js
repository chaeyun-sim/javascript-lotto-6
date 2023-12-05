import Validator from '../utils/Validator.js';

class BonusNumber {
  #bonus;
  /**
   *
   * @param {number[]} winnings
   * @param {string} input
   */
  constructor(winnings, input) {
    this.#validate(winnings, input);
    this.#bonus = Number(input);
  }

  /**
   *
   * @param {string} input
   */
  #validate(winnings, input) {
    Validator.isBonusNumberValid(winnings, input);
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
