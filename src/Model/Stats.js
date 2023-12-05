import OutputView from '../View/OutputView.js';
import { STATS_TEXT, WinningMoney } from '../constants/constants.js';

class Stats {
  /**
   *
   * @param {number[][]} lottos
   * @param {number[]} winning
   * @param {number} bonus
   */
  constructor(lottos, winning, bonus) {
    this.stats = {};
    this.winningCashes = 0;
    this.#makeMap();
    this.#calculate(lottos, winning, bonus);
  }

  #makeMap() {
    Object.keys(STATS_TEXT).map(item => {
      return (this.stats[item] = 0);
    });
  }

  /**
   *
   * @param {number[][]} lottos
   * @param {number[]} winning
   * @param {number} bonus
   */
  #calculate(lottos, winning, bonus) {
    lottos.forEach(lotto => {
      const lottoPoint = lotto.filter(num => winning.includes(num)).length;
      const bonusPoint = +lotto.includes(bonus);

      const total = lottoPoint + bonusPoint;
      this.#addStat(total, bonusPoint);
    });

    this.#printStats();
  }

  /**
   *
   * @param {number} total
   * @param {number} bonusPoint
   */
  #addStat(total, bonusPoint) {
    switch (total) {
      case 3:
        this.#updateFifth();
        break;
      case 4:
        this.#updateFourth();
        break;
      case 5:
        this.#updateSecondOrThird(bonusPoint);
        break;
      case 6:
        this.#updateFirst();
        break;
    }
  }

  #updateFifth() {
    this.stats.fifth += 1;
    this.winningCashes += WinningMoney[0];
  }

  #updateFourth() {
    this.stats.fourth += 1;
    this.winningCashes += WinningMoney[1];
  }

  #updateSecondOrThird(bonusPoint) {
    if (bonusPoint) {
      this.stats.second += 1;
      this.winningCashes += WinningMoney[2];
    } else {
      this.stats.third += 1;
      this.winningCashes += WinningMoney[3];
    }
  }

  #updateFirst() {
    this.stats.first += 1;
    this.winningCashes += WinningMoney[4];
  }

  #printStats() {
    const counts = Object.values(this.stats);

    OutputView.printStats();
    Object.values(STATS_TEXT).forEach((item, i) =>
      OutputView.print(`${item}${counts[i]}개`)
    );
  }

  printwinningCashes(money) {
    const total = (this.winningCashes / money) * 100;
    return total.toFixed(1);
  }
}

export default Stats;
