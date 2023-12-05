import InputView from '../View/InputView.js'

class Controller {
  constructor() {
    this.run();
  }

  async run(){
    await this.requestCash();
  }

  async requestCash(){
    const cash = await InputView.inputMoney();
    return cash;
  }
}

export default Controller;