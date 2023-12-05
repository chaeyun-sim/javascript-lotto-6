import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import Cash from '../Model/Cash.js';
import { GUIDE_TEXT, UNIT } from '../constants/constants.js';
import Lottos from '../Model/Lottos.js';
import Lotto from '../Model/Lotto.js';
import BonusNumber from '../Model/BonusNumber.js';
import Stats from '../Model/Stats.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Controller {
  #cash;
  #lottos;
  #winnings;
  #bonus;

  async run() {
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
      OutputView.printError(error);
      await this.requestCash();
    }
  }

  requestGenerateLotto() {
    const count = this.#cash / UNIT;
    OutputView.printLottosCount(count);
    this.#lottos = new Lottos(count).returnLottos();
  }

  async requestWinningNumbers() {
    try {
      const input = await InputView.inputWinningNumbers();
      const splited = input.split(',').map(Number);
      this.lotto = new Lotto(splited);
      this.#winnings = this.lotto.returnLotto();
    } catch (error) {
      OutputView.printError(error);
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
      OutputView.printError(error);
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
      OutputView.printError(error);
      this.requestStats();
    }
  }
}

export default Controller;
