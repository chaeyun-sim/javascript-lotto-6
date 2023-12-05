import InputView from '../View/InputView.js';

class Controller {
  #cash;

  async control() {
    await this.requestCash();
  }

  async requestCash() {
    const test = await InputView.inputMoney();
    return test;
  }
}

export default Controller;
