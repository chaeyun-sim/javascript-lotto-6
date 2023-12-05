import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import Cash from '../Model/Cash.js';
import { UNIT } from '../constants/constants.js';
import Lottos from '../Model/Lottos.js';
import Lotto from '../Model/Lotto.js';

class Controller {
  #cash;
  #lottos;
  #winnings;

  async control() {
    await this.requestCash();
    this.requestGenerateLotto();
    await this.requestWinningNumbers();
    await this.requestBonusNumber();
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
    const count = this.#cash / UNIT;

    OutputView.printLottosCount(count);
    this.#lottos = new Lottos(count).returnLottos();
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
    const input = await InputView.inputBonusNumber();
    console.log(input);
  }
}

export default Controller;
