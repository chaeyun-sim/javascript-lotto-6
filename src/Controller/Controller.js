import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import Cash from '../Model/Cash.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { UNIT } from '../constants/constants.js';

class Controller {
  #cash;

  async control() {
    await this.requestCash();
    this.requestGenerateLotto();
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
  }
}

export default Controller;
