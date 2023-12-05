import Validator from '../utils/Validator.js'

class Cash {
  #cash

  /**
   * 
   * @param {string} input 
   */
  constructor(input) {
    this.#cash = input;
    this.#validate(input)
  }

  /**
   * 
   * @param {string} input 
   */
  #validate(input){
    Validator.checkCash(input);
  }

  /**
   * 
   * @returns {number}
   */
  returnCash(){
    return Number(this.#cash);
  }
}

export default Cash;