import InputView from '../View/InputView.js';
import Cash from '../Model/Cash.js';
import { MissionUtils } from '@woowacourse/mission-utils';

class Controller {
  #cash;

  async control() {
    await this.requestCash();
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
}

export default Controller;
