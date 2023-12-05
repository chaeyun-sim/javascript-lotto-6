import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import OutputView from '../View/OutputView.js';

class Lottos {
  #lottos;

  /**
   *
   * @param {number} count
   */
  constructor(count) {
    this.#lottos = [];
    this.#generateLottos(count);
  }

  /**
   *
   * @param {number} count
   */
  #generateLottos(count) {
    while (count) {
      const RANDOM_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      const lotto = RANDOM_NUMBERS.sort((a, b) => a - b);
      this.#validateLottoAndAdd(lotto);

      count--;
    }
  }

  /**
   *
   * @param {number[]} lotto
   */
  #validateLottoAndAdd(lotto) {
    const validLotto = new Lotto(lotto).returnLotto();
    this.#printLotto(validLotto);
    this.#addLotto(validLotto);
  }

  /**
   *
   * @param {number[]} lotto
   */
  #printLotto(lotto) {
    OutputView.printLotto(lotto);
  }

  /**
   *
   * @param {number[]} lotto
   */
  #addLotto(lotto) {
    this.#lottos.push(lotto);
  }

  /**
   *
   * @returns {number[][]}
   */
  returnLottos() {
    return this.#lottos;
  }
}

export default Lottos;
