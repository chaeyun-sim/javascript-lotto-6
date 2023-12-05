import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import Cash from '../Model/Cash.js';
import { UNIT } from '../constants/constants.js';
import Lottos from '../Model/Lottos.js';
import Lotto from '../Model/Lotto.js';
import BonusNumber from '../Model/BonusNumber.js';
import Stats from '../Model/Stats.js';

class Controller {
  #cash;
  #lottos;
  #winnings;
  #bonus;

  async control() {
    await this.requestCash();
    this.requestGenerateLotto();
    await this.requestWinningNumbers();
    await this.requestBonusNumber();
    this.requestStats();
  }

  async requestCash() {
    try {
      const input = await InputView.inputMoney();
      this.#cash = new Cash(input).returnCash();
    } catch (error) {
      OutputView.print(`${error.message}`);
      await this.requestCash();
    }
  }

  requestGenerateLotto() {
    try {
      const count = this.#cash / UNIT;

      OutputView.printLottosCount(count);
      this.#lottos = new Lottos(count).returnLottos();
    } catch (error) {
      OutputView.print(`${error.message}`);
      this.requestGenerateLotto();
    }
  }

  async requestWinningNumbers() {
    try {
      const input = await InputView.inputWinningNumbers();
      const splited = input.split(',').map(Number);

      this.lotto = new Lotto(splited);
      this.lotto.otherValidates();
      this.#winnings = this.lotto.returnLotto();
    } catch (error) {
      OutputView.print(`${error.message}`);
      await this.requestWinningNumbers();
    }
  }

  async requestBonusNumber() {
    try {
      const input = await InputView.inputBonusNumber();
      this.#bonus = new BonusNumber(
        this.#winnings,
        Number(input)
      ).returnBonus();
    } catch (error) {
      OutputView.print(`${error.message}`);
      await this.requestBonusNumber();
    }
  }

  requestStats() {
    try {
      const money = new Stats(
        this.#lottos,
        this.#winnings,
        this.#bonus
      ).printwinningCashes(this.#cash);

      OutputView.printReturnRate(money);
    } catch (error) {
      OutputView.print(`${error.message}`);
      this.requestStats();
    }
  }
}

export default Controller;
