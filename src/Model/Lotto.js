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
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  otherValidates() {
    Validator.checkLotto(this.#numbers);
  }

  // TODO: 추가 기능 구현
  /**
   *
   * @returns {number[]}
   */
  returnLotto() {
    return this.#numbers;
  }
}

export default Lotto;
