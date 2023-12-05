import { MissionUtils } from "@woowacourse/mission-utils"
import {GUIDE_TEXT} from '../constants/constants.js'

const InputView = {
  inputMoney() {
    const input = MissionUtils.Console.readLineAsync(GUIDE_TEXT.inputMoney)
    return String(input)
  },

  inputWinningNumbers() {
    const input = MissionUtils.Console.readLineAsync(GUIDE_TEXT.inputWinningNumbers)
    return String(input)
  },

  inputBonusNumber() {
    const input = MissionUtils.Console.readLineAsync(GUIDE_TEXT.inputBonusNumber)
    return String(input)
  }
}

export default InputView;