import InputView from '../View/InputView.js'
import Cash from '../Model/Cash.js'

class Controller {
  #cash

  constructor() {
    this.run();
  }

  async run(){
    await this.requestCash();
  }

  async requestCash(){
    const cash = await InputView.inputMoney();
    this.#cash = new Cash(cash).returnCash();
  }
}

export default Controller;