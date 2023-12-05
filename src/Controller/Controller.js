import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import Cash from '../Model/Cash.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { UNIT } from '../constants/constants.js';
import Lottos from '../Model/Lottos.js';

class Controller {
  #cash;
  #lottos;

  async control() {
    await this.requestCash();
    this.requestGenerateLotto();
    await this.requestWinningNumbers();
  }

  async requestCash() {
    try {
      const input = await InputView.inputMoney();
      this.#cash = new Cash(input).returnCash();
    } catch (error) {
      MissionUtils.Console.print(`${error.message}`);
      await this.requestCash();
    }
  }

  requestGenerateLotto() {
    const count = this.#cash / UNIT;

    OutputView.printLottosCount(count);
    this.#lottos = new Lottos(count).returnLottos();
  }

  async requestWinningNumbers() {
    const input = await InputView.inputWinningNumbers();
    return input;
  }
}

export default Controller;
